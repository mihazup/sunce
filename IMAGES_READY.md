# 影 Images Added to Website

## What's Ready

The website is now **set up to display images** from the original site:

1. 武 **Favicon** — Logo appears in browser tab (placeholder ready)
2. 武 **Instructor Photos** — Mihael & Dorotea photos (placeholders ready)
3. 武 **Gallery Section** — 6 training photos from original site

## What You Need to Do

### Step 1: Create Images Folders

Create this folder structure in your project:

```
sunce-redesign/
├── images/
│   ├── favicon.png
│   ├── instructors/
│   │   ├── mihael.jpg
│   │   └── dorotea.jpg
│   └── gallery/
│       ├── trening.jpg
│       ├── mico2.jpg
│       ├── mirta.jpg
│       ├── trening2.jpg
│       ├── seminar.jpeg
│       └── zimski.jpg
```

### Step 2: Download Images from Original Site

All images are at: `https://nanbudoklub-sunce.hr/[filename]`

**Download these files:**

| Save As | From Original |
|---------|---------------|
| `images/favicon.png` | `sunce-favicon.png` |
| `images/instructors/mihael.jpg` | `miha.jpg` |
| `images/instructors/dorotea.jpg` | `dora1.jpg` |
| `images/gallery/trening.jpg` | `trening.jpg` |
| `images/gallery/mico2.jpg` | `mico2.jpg` |
| `images/gallery/mirta.jpg` | `mirta.jpg` |
| `images/gallery/trening2.jpg` | `trening2.jpg` |
| `images/gallery/seminar.jpeg` | `seminar.jpeg` |
| `images/gallery/zimski.jpg` | `zimski.jpg` |

### Step 3: Add Images to Website

Simply download the images to your local `images/` folder and they'll automatically display on the website!

## Current Setup

The website is **already configured** with image paths for:

- **Favicon** — `<link rel="icon" href="images/favicon.png">` in HTML
- **Instructors** — `<img src="images/instructors/mihael.jpg">` and `dorotea.jpg`
- **Gallery** — 6 images in the gallery section

## Gallery Features

- 武 Responsive grid layout (auto-adjusts to screen size)
- 武 Hover zoom effect (images scale up when you hover)
- 武 Shadow effects for depth
- 武 Clean spacing between images
- 武 Works on mobile and desktop

## Instructor Photos

- 武 Circular avatars (cropped and centered)
- 武 White border around photos
- 武 Shadow effect
- 武 Names and ranks displayed below

## Quick Download (via Terminal)

If you're comfortable with command line, download all images at once:

```bash
# Create folders
mkdir -p images/instructors
mkdir -p images/gallery

# Download favicon
curl -o images/favicon.png https://nanbudoklub-sunce.hr/sunce-favicon.png

# Download instructor photos
curl -o images/instructors/mihael.jpg https://nanbudoklub-sunce.hr/miha.jpg
curl -o images/instructors/dorotea.jpg https://nanbudoklub-sunce.hr/dora1.jpg

# Download gallery images
curl -o images/gallery/trening.jpg https://nanbudoklub-sunce.hr/trening.jpg
curl -o images/gallery/mico2.jpg https://nanbudoklub-sunce.hr/mico2.jpg
curl -o images/gallery/mirta.jpg https://nanbudoklub-sunce.hr/mirta.jpg
curl -o images/gallery/trening2.jpg https://nanbudoklub-sunce.hr/trening2.jpg
curl -o images/gallery/seminar.jpeg https://nanbudoklub-sunce.hr/seminar.jpeg
curl -o images/gallery/zimski.jpg https://nanbudoklub-sunce.hr/zimski.jpg
```

## Testing Locally

1. Download images and save to `images/` folder
2. Open `index.html` in your browser
3. Check that:
   - Favicon appears in browser tab
   - Instructor photos display in their circular frames
   - Gallery images appear in grid below instructors
   - Hover effects work (images zoom in)

## Deploying with Images

When you push to GitHub:

1. Create `images/` folder in your repo
2. Add all downloaded images
3. Git add & commit: `git add images/`
4. Git push: `git push origin main`
5. GitHub Pages will serve the images automatically

## Image Optimization (Optional)

Before uploading to GitHub, you can compress images for faster loading:

- Use [TinyPNG.com](https://tinypng.com/) to compress JPEGs
- Recommended sizes:
  - Instructor photos: 200x200px
  - Gallery images: 600x600px
  - Favicon: 64x64px or 256x256px

## Troubleshooting

**Images not showing?**
- Make sure image files exist in correct folders
- Check file extensions (.jpg, .jpeg, .png)
- Verify folder structure matches above
- Open browser DevTools (F12) → Console for errors

**Website working but no images?**
- You haven't created `images/` folder yet
- Download the images first!

---

## Next Steps

1. 武 Website structure is ready (already updated)
2. 📥 **Download images** from original site
3. 📁 **Create `images/` folder** with subfolders
4. 絵 **Add downloaded images** to their locations
5. 武 **Test locally** by opening `index.html`
6. 速 **Deploy to GitHub** with images included

**Once you download the images, everything will display perfectly!** 祝
