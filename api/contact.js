// Vercel serverless function: emails website enquiries through Resend.
// The API key stays on the server. Set these in Vercel, never in the code:
//   RESEND_API_KEY  required
//   CONTACT_TO      inboxes that receive enquiries, separated by commas
//   CONTACT_FROM    sender on a domain verified in Resend

const TO = 'cskkalariblr@gmail.com'
const FROM = 'CSK Kalari Website <enquiries@cskkalari.com>'
const LIMITS = { name: 100, phone: 30, email: 200, centre: 60, programme: 100, age: 20, message: 3000 }

const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

function clean(body) {
  return Object.fromEntries(Object.entries(LIMITS).map(([k, max]) => [k, typeof body[k] === 'string' ? body[k].trim().slice(0, max) : '']))
}

function validate(v) {
  if (!v.name) return 'Name is required.'
  if (!/^[+\d][\d\s-]{8,}$/.test(v.phone)) return 'A valid phone number is required.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'A valid email is required.'
  if (!v.centre) return 'Centre is required.'
  return ''
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = null }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Invalid request.' })

  // Hidden form field that people never see; only bots fill it in
  if (body.website) return res.status(200).json({ ok: true })

  const v = clean(body)
  const invalid = validate(v)
  if (invalid) return res.status(400).json({ error: invalid })

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Email is not configured.' })
  }

  const rows = [['Name', v.name], ['Phone', v.phone], ['Email', v.email], ['Centre', v.centre], ['Programme', v.programme], ['Student age', v.age], ['Message', v.message]].filter(([, value]) => value)
  const html = `<h2>New enquiry from the website</h2><table cellpadding="6">${rows.map(([k, value]) => `<tr><td valign="top"><strong>${k}</strong></td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('')}</table>`
  const text = rows.map(([k, value]) => `${k}: ${value}`).join('\n')

  try {
    const sent = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || FROM,
        to: (process.env.CONTACT_TO || TO).split(',').map((a) => a.trim()),
        reply_to: v.email,
        subject: `New enquiry: ${v.name} (${v.centre})`.replace(/[\r\n]+/g, ' '),
        html,
        text,
      }),
    })
    if (!sent.ok) {
      const detail = await sent.json().catch(() => ({}))
      console.error('Resend rejected the email', sent.status, detail.name, detail.message)
      return res.status(502).json({ error: 'The email could not be sent.' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Could not reach Resend', err.message)
    return res.status(502).json({ error: 'The email could not be sent.' })
  }
}
