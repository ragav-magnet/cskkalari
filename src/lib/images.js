// Auto-loads every photo placed in src/assets/images/<folder>/.
// Drop JPG/PNG/WebP files into a folder and they appear on the site after the
// next build — no code changes needed. File names become alt text, so name
// them descriptively, e.g. "kids-batch-meythari.jpg".

const files = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
})

const toAlt = (path) =>
  path
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\d+\b/g, '')
    .trim()

export const images = Object.entries(files)
  .map(([path, src]) => {
    const folder = path.split('/').slice(-2, -1)[0]
    return { src, folder, alt: toAlt(path) || `${folder} photo`, path }
  })
  .sort((a, b) => a.path.localeCompare(b.path))

export const imagesIn = (folder) => images.filter((img) => img.folder === folder)

// Returns the nth image of a folder, or null so callers can show artwork instead
export const pick = (folder, n = 0) => imagesIn(folder)[n] ?? null
