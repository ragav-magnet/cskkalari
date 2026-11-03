# Site photos

Every image in these folders is picked up automatically (see `src/lib/images.js`).
Add JPG, PNG or WebP files and rebuild; no code changes are needed.
Until a folder has photos, the site shows woven artwork panels in their place.

| Folder           | Used on                                                       |
|------------------|---------------------------------------------------------------|
| `kasavanahalli/` | Gallery filter, Contact card and home hover preview (1st photo) |
| `sg-palaya/`     | Gallery filter, Contact card, home hover preview and home intro collage (1st photo) |
| `udayanagar/`    | Gallery filter, Contact card and home hover preview (1st photo) |
| `training/`      | Home intro collage (6th), About (3rd), Programmes (4th), "Life at the kalari" on the home page (3rd, 4th, 5th, 7th, 9th, 10th), Gallery |
| `events/`        | About story (1st), home intro collage (3rd), "Life at the kalari" (2nd), Gallery   |
| `hero/`          | Background of the home hero and every page banner (1st photo) |
| `brand/`         | The CSK Kalari logo, used through `BrandLogo` (not a gallery folder) |

Tips
- File names become alt text and gallery captions: `kids-batch-meythari.jpg` → "kids batch meythari".
- Files that share a name (after the number) count as one photo in the gallery, so crops of a photo can fill
  several slots without repeating there.
- Prefix with numbers to control order: `01-lamp-lighting.jpg`, `02-...`.
- Export at about 2000px on the long edge, quality 80, ideally WebP.
- Photos from the Google Business listings: open each listing → Photos → download
  the owner-uploaded images (customer photos belong to the people who took them;
  ask permission before using those).
