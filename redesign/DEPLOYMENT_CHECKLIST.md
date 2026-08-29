# 速 Sunce Website Deployment Checklist

Complete these steps to deploy your new website.

## Pre-Deployment (Local Testing)

- [ ] Test `index.html` in a browser (open file directly)
- [ ] Test all navigation links work and scroll smoothly
- [ ] Test contact form submission (check browser console)
- [ ] Test on mobile device or use browser DevTools
- [ ] Check all images and icons display correctly
- [ ] Verify all trainer information is accurate
- [ ] Update contact email/phone if needed
- [ ] Test all CTA buttons lead to contact section

## GitHub Setup

- [ ] Create GitHub account (if you don't have one)
- [ ] Create new repository named `nanbudoklub-sunce`
- [ ] Make repository **Public**
- [ ] Clone repository locally: `git clone https://github.com/YOUR-USERNAME/nanbudoklub-sunce.git`
- [ ] Copy `index.html`, `styles.css`, `script.js` into the repo folder
- [ ] Copy `README.md` and `.gitignore` too
- [ ] Git add: `git add .`
- [ ] Git commit: `git commit -m "Initial: modern website redesign"`
- [ ] Git push: `git push origin main`

## GitHub Pages Setup

- [ ] Go to repository **Settings**
- [ ] Find **Pages** section (left sidebar)
- [ ] Set Source to **Deploy from a branch → main**
- [ ] Confirm GitHub Pages is enabled
- [ ] Note your GitHub Pages URL: `https://YOUR-USERNAME.github.io/nanbudoklub-sunce/`
- [ ] Test that URL works in browser
- [ ] Verify all pages load correctly

## Domain & DNS (Cloudflare)

- [ ] Sign up for [Cloudflare](https://cloudflare.com) (free tier)
- [ ] Add your domain `nanbudoklub-sunce.hr`
- [ ] Let Cloudflare scan DNS records
- [ ] Update your domain registrar's nameservers to Cloudflare's
- [ ] Wait for DNS to propagate (5 min - 48 hours)
- [ ] Verify DNS is working (can check with `nslookup` or online tools)

## Connect Custom Domain to GitHub Pages

- [ ] Go to GitHub repository **Settings → Pages**
- [ ] Enter custom domain: `nanbudoklub-sunce.hr`
- [ ] Click Save
- [ ] Wait for GitHub to create CNAME file
- [ ] Verify CNAME file exists in your repo
- [ ] Wait for SSL certificate (automatic, takes a few minutes)

## Cloudflare SSL/HTTPS

- [ ] Log into Cloudflare dashboard
- [ ] Select your domain
- [ ] Go to **SSL/TLS → Overview**
- [ ] Set encryption to **Full** or **Full (strict)**
- [ ] Go to **SSL/TLS → Edge Certificates**
- [ ] Enable **Always Use HTTPS**
- [ ] (Optional) Set HTTP to HTTPS redirect

## Post-Deployment Testing

- [ ] Visit your domain: `https://nanbudoklub-sunce.hr/` (with HTTPS)
- [ ] Verify site loads correctly
- [ ] Test all navigation and links
- [ ] Test contact form
- [ ] Test on mobile
- [ ] Check site speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify HTTPS certificate is valid
- [ ] Check Cloudflare analytics dashboard

## SEO & Search Engines

- [ ] Set up [Google Search Console](https://search.google.com/search-console)
- [ ] Add your domain and verify ownership
- [ ] Submit sitemap (you can create a simple `sitemap.xml` if needed)
- [ ] Check for any indexing issues
- [ ] Set up [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Submit domain there too

## (Optional) Analytics & Tracking

- [ ] Create [Google Analytics](https://analytics.google.com/) account
- [ ] Add Google Analytics tracking code to `index.html` (in `<head>`)
- [ ] Test that data is being collected
- [ ] (Alternative) Use Cloudflare Web Analytics (built-in, no code needed)

## (Optional) Email Integration

- [ ] Choose email service (e.g., [Formspree](https://formspree.io/), [Netlify Forms](https://netlify.com/), or custom backend)
- [ ] Set up form handling
- [ ] Test contact form sends emails
- [ ] Verify emails reach your inbox

## Maintenance

- [ ] Set calendar reminder to check site monthly
- [ ] Update content as needed (new classes, trainers, etc.)
- [ ] Monitor analytics
- [ ] Keep Cloudflare settings optimized
- [ ] Renew domain before expiration

---

## Quick Reference URLs

- **GitHub Repo**: https://github.com/YOUR-USERNAME/nanbudoklub-sunce
- **GitHub Pages (temp)**: https://YOUR-USERNAME.github.io/nanbudoklub-sunce/
- **Live Domain**: https://nanbudoklub-sunce.hr
- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **GitHub Settings**: https://github.com/YOUR-USERNAME/nanbudoklub-sunce/settings/pages

---

**武 All done?** Your new website is live! 祝
