# Adding Images to Your Sunce Website

The redesigned website is ready to display images from your current site. Follow these instructions to add them.

## Step 1: Create Images Directory

1. In your `sunce-redesign` folder, create a new folder called `images`
2. Structure should look like:
   ```
   sunce-redesign/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images/          (new folder)
       ├── gallery/
       ├── instructors/
       └── banner/
   ```

## Step 2: Identify Images from Old Site

The old website has images in these sections:
- **Instructor photos** — Mihael Župančić & Dorotea Župančić
- **Gallery images** — Training photos, technique demonstrations, team photos
- **Social links** — Facebook & Instagram references

## Step 3: Download Images from Old Site

### Option A: Manual Download
1. Go to https://nanbudoklub-sunce.hr/
2. Right-click on each image → "Save image as"
3. Save to `images/` folder in your project
4. Rename images clearly:
   - `mihael.jpg` (instructor photo)
   - `dorotea.jpg` (instructor photo)
   - `gallery-1.jpg`, `gallery-2.jpg`, etc.

### Option B: Using Browser DevTools
1. Open https://nanbudoklub-sunce.hr/ in your browser
2. Press F12 to open DevTools
3. Go to **Elements** tab
4. Search for `<img` tags
5. Right-click images and download them

### Option C: Get Images from WordPress
The old site may be hosted on WordPress. Images are often at:
- `https://nanbudoklub-sunce.hr/wp-content/uploads/`

## Step 4: Add Instructor Photos

### Update instructor cards in `index.html`:

Find the instructor cards section and replace the avatar circles with images:

**Before:**
```html
<div class="instructor-avatar" style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);">MŽ</div>
```

**After:**
```html
<img src="images/instructors/mihael.jpg" alt="Mihael Župančić" class="instructor-avatar">
```

### Add this CSS to `styles.css` for image avatars:

```css
.instructor-avatar {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
    box-shadow: var(--shadow-md);
    object-fit: cover;  /* Important for images */
}
```

## Step 5: Add Photo Gallery

### Option 1: Simple Gallery (Add to HTML)

Add a new section before the Contact section in `index.html`:

```html
<!-- Gallery Section -->
<section class="gallery">
    <div class="container">
        <div class="section-header">
            <h2>Galerija</h2>
            <div class="accent-line"></div>
        </div>
        
        <div class="gallery-grid">
            <img src="images/gallery-1.jpg" alt="Trening">
            <img src="images/gallery-2.jpg" alt="Tehnika">
            <img src="images/gallery-3.jpg" alt="Tim">
            <img src="images/gallery-4.jpg" alt="Seminar">
            <img src="images/gallery-5.jpg" alt="Vježbanje">
            <img src="images/gallery-6.jpg" alt="Vječanje">
        </div>
    </div>
</section>
```

### Add this CSS to `styles.css`:

```css
/* Gallery Section */
.gallery {
    background: var(--white);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.gallery-grid img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    cursor: pointer;
}

.gallery-grid img:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
}
```

### Option 2: With Lightbox (Advanced)

Use a library like Lightbox2 for clicking images to expand:

1. Add to `index.html` `<head>`:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
   ```

2. Update gallery images:
   ```html
   <a href="images/gallery-1.jpg" data-lightbox="gallery">
       <img src="images/gallery-1.jpg" alt="Trening">
   </a>
   ```

## Step 6: Add Banner/Hero Image (Optional)

Add a background image to the hero section. Update CSS in `styles.css`:

```css
.hero {
    background-image: url('images/hero-banner.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);  /* Dark overlay */
    z-index: 1;
}

.hero-content {
    z-index: 10;  /* Make sure text is on top */
}
```

## Step 7: Test Your Images

1. Open `index.html` in your browser
2. Make sure all images display correctly
3. Check on mobile devices
4. Verify image file sizes aren't too large (compress if needed)

## Image Optimization Tips

### Compress Images for Web
1. Use tools like:
   - [TinyPNG.com](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
   - [Squoosh.app](https://squoosh.app/)

2. Or via command line:
   ```bash
   # MacOS/Linux
   imagemin images/*.jpg --out-dir=images/optimized
   ```

### Recommended Image Sizes
- **Instructor photos**: 400x400px @ 72dpi
- **Gallery images**: 800x600px @ 72dpi
- **Hero banner**: 1920x1080px @ 72dpi
- **File format**: JPG for photos, PNG for logos

## Step 8: Update Social Links

The contact section already links to Facebook and Instagram:
```html
<a href="https://www.facebook.com/dojosunce/" target="_blank">Facebook</a>
<a href="https://www.instagram.com/dojosunce/" target="_blank">Instagram</a>
```

Add **social media icons** (optional):

```html
<a href="https://www.facebook.com/dojosunce/" target="_blank" class="social-icon">
    <svg><!-- Facebook icon --></svg>
</a>
```

Or use Font Awesome icons:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<a href="https://www.facebook.com/dojosunce/" target="_blank">
    <i class="fab fa-facebook"></i> Facebook
</a>
```

## Troubleshooting

**Images not showing?**
- Check the file path is correct
- Verify image files exist in the `images/` folder
- Open browser DevTools (F12) → Console to see errors
- Make sure file extensions match (`.jpg`, `.png`, etc.)

**Images look blurry?**
- Use higher resolution source images
- Make sure file size is reasonable
- Check image quality settings

**Page loading slowly?**
- Compress images using TinyPNG or similar
- Use modern formats (WebP with fallback to JPG)
- Lazy load images (advanced technique)

---

## Complete Example File Structure

After adding images, your folder should look like:

```
sunce-redesign/
├── index.html                    # Updated with image tags
├── styles.css                   # Updated with gallery CSS
├── script.js
├── README.md
├── DEPLOYMENT_CHECKLIST.md
├── PROJECT_SUMMARY.md
├── .gitignore
└── images/
    ├── instructors/
    │   ├── mihael.jpg
    │   └── dorotea.jpg
    ├── gallery/
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   ├── gallery-4.jpg
    │   ├── gallery-5.jpg
    │   └── gallery-6.jpg
    └── banner/
        └── hero-banner.jpg
```

---

**Need help?** Check the main `README.md` file for more customization options.
