// The CSK Kalari logo. Decorative wherever it is used: the name always sits beside
// it or in the link around it, so the image itself needs no alt text.
import logo from '@/assets/images/brand/csk-kalari-logo.webp'

export default function BrandLogo({ className }) {
  return <img src={logo} alt="" width="640" height="640" decoding="async" className={className} />
}
