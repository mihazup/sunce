# Nanbudo klub Sunce — Redesigned Website

A modern, minimalist Japan-inspired static website for Nanbudo klub Sunce.

## 📁 Files Included

- **index.html** — Main HTML structure
- **styles.css** — Modern minimalist styling with Japan-inspired design
- **script.js** — Interactive features (mobile menu, form handling, scroll animations)

## 美 Design Features

光 **Modern Minimalist Design**
- Clean typography with Japanese serif fonts
- Subtle animations and transitions
- High-contrast color scheme (black, white, red accents)
- Fully responsive (mobile-first approach)

的 **Japan-Inspired Elements**
- Traditional color palette (black, white, gold accents, red)
- Zen-like minimalism and whitespace
- Smooth, intentional animations
- Elegant serif typography mixing with modern sans-serif

機 **Fully Responsive**
- Mobile-optimized navigation
- Touch-friendly interface
- Works on all screen sizes

速 **Performance**
- Static HTML/CSS/JS (no dependencies)
- Fast loading times
- SEO-friendly structure

## 速 Deployment to GitHub + Cloudflare

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New Repository**
3. Name it: `nanbudoklub-sunce` (or your preferred name)
4. Make it **Public** (required for GitHub Pages)
5. Add a description: "Modern website for Nanbudo klub Sunce"
6. Click **Create repository**

### Step 2: Upload Files to GitHub

**Option A: Using Git CLI**

```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/nanbudoklub-sunce.git
cd nanbudoklub-sunce

# Copy the files here
# (index.html, styles.css, script.js)

# Push to GitHub
git add .
git commit -m "Initial commit: modern website redesign"
git push origin main
```

**Option B: Using GitHub Web Interface**

1. Go to your repository
2. Click **Add file → Upload files**
3. Drag and drop `index.html`, `styles.css`, and `script.js`
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository → **Settings**
2. Scroll to **Pages** (in left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch
5. Click **Save**

Your site will now be live at: `https://YOUR-USERNAME.github.io/nanbudoklub-sunce/`

### Step 4: Set Up Cloudflare (Custom Domain)

1. Go to [cloudflare.com](https://cloudflare.com) and sign up
2. Click **Add a site**
3. Enter your domain (e.g., `nanbudoklub-sunce.hr`)
4. Choose the **Free** plan
5. Cloudflare will scan your DNS records
6. Update your domain registrar's nameservers to Cloudflare's (they'll provide these)
7. Wait for DNS to propagate (can take a few minutes to 48 hours)

### Step 5: Configure GitHub Pages with Custom Domain

1. Go to your GitHub repository → **Settings**
2. Scroll to **Pages**
3. Under "Custom domain", enter: `nanbudoklub-sunce.hr`
4. Click **Save**
5. GitHub will automatically create a CNAME file

### Step 6: Enable HTTPS on Cloudflare

1. In Cloudflare dashboard, go to **SSL/TLS**
2. Select **Full** or **Full (strict)** encryption mode
3. Go to **Page Rules** (or **Rules → Page Rules**)
4. Add a rule: `Always Use HTTPS` for `*nanbudoklub-sunce.hr/*`
5. Enable **Auto Redirect**

## 🛠️ Customization

### Update Contact Information

Edit the **Contact section** in `index.html`:

```html
<p><strong>Email:</strong> your-email@example.com</p>
<p><strong>Telefon:</strong> +385 1 234 5678</p>
<p><strong>Mjesto:</strong> Your City, Croatia</p>
```

### Update Trainer Information

Find the **Instructors section** and update names, ranks, and bios:

```html
<h3>Mihael Župančić</h3>
<p class="instructor-rank">Glavni Trener — 6. Dan</p>
<p class="instructor-bio">Your bio text here...</p>
```

### Change Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-black: #0a0a0a;
    --accent-red: #d32f2f;
    --accent-gold: #d4af37;
    /* ... etc ... */
}
```

### Add Your Logo

Replace the `☀️ Sunce` logo in the navbar with an image:

```html
<div class="logo">
    <img src="path/to/your-logo.png" alt="Sunce Logo" height="40">
</div>
```

## 📝 SEO Optimization

The site includes basic SEO. To improve further:

1. Update the meta description in `index.html`
2. Add Open Graph tags for social sharing
3. Submit sitemap to Google Search Console
4. Set up Google Analytics

## 🔒 Security

- No external dependencies (static site)
- Content Security Policy ready
- HTTPS enabled via Cloudflare

## 📞 Contact Form

The contact form currently logs submissions to browser console. To send emails:

**Option 1: Formspree** (easiest)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and add your form
3. Update the form action in `index.html`

**Option 2: Netlify Forms**
1. Deploy to [netlify.com](https://netlify.com) instead (free tier)
2. Netlify automatically handles forms

**Option 3: Backend Service**
1. Set up a simple backend (Node.js, Python, etc.)
2. Point form to your backend endpoint

## 的 Next Steps

1. **Backup existing site** — Save the old website files
2. **Test locally** — Open `index.html` in a browser before uploading
3. **Upload to GitHub** — Follow deployment steps above
4. **Test on live domain** — Verify everything works
5. **SEO submission** — Add to Google Search Console & Bing
6. **Social links** — Add Facebook, Instagram, etc. to footer
7. **Analytics** — Add Google Analytics or similar tracking

## 知 Tips

- Keep content fresh and updated
- Add photos of training/events in a gallery section
- Consider adding a blog for class announcements
- Use Cloudflare analytics to track visitors
- Test on mobile devices regularly

## 📄 License

This website design is for exclusive use by Nanbudo klub Sunce.

---

**Questions?** Refer to:
- [GitHub Pages Documentation](https://pages.github.com/)
- [Cloudflare Getting Started](https://developers.cloudflare.com/fundamentals/get-started/)
- [MDN Web Docs](https://developer.mozilla.org/)
