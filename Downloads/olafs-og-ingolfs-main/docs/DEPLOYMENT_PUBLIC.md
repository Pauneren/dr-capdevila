# Public Site Deployment - Cloudflare Pages

## Overview

This document describes the deployment of the public Astro website to Cloudflare Pages using a temporary *.pages.dev URL.

## Cloudflare Pages Configuration

### Project Settings

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Root Directory**: `/` (project root)
- **Node Version**: `18` (or latest)

### Repository Connection

- **Git Provider**: GitHub
- **Repository**: olafs-og-ingolfs-main
- **Production Branch**: `main`
- **Build Mode**: Production

## Environment Variables

The following environment variables must be configured in Cloudflare Pages (Production):

```bash
SANITY_PROJECT_ID=5v2kf6a1
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_READ_TOKEN=<viewer_token>
PUBLIC_SHOW_KIDS=false
```

### Environment Variable Notes

- `SANITY_READ_TOKEN`: Must be a read-only Viewer token from Sanity
- `PUBLIC_SHOW_KIDS`: Controls kids content visibility (set to false for public site)
- **Important**: Never commit actual tokens to the repository

## Deployment URL

- **Cloudflare Pages Project**: `[To be filled during deployment]`
- **Pages.dev URL**: `[To be assigned during deployment]`
- **Status**: Ready for deployment

## Pre-deployment Checklist

### ✅ Repository Status
- Main branch contains latest commits (steps 00-10)
- No secrets committed (only `.env.example` tracked)
- All tests pass locally: `npm run test:smoke`
- Build succeeds locally: `npm run build`

### ✅ Sanity Configuration
- Sanity project ID: `5v2kf6a1`
- Dataset: `production`
- Viewer token created and available
- Site settings configured in Sanity Studio

### ✅ Content Readiness
- Site settings populated in Sanity
- Sample services and announcements created (optional)
- Historical images deployed to `/historical/` paths

## Deployment Steps

### 1. Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Create a project**
4. Select **Connect to Git**
5. Choose GitHub and authorize access
6. Select the `olafs-og-ingolfs-main` repository

### 2. Configure Build Settings

1. **Framework preset**: Astro
2. **Build command**: `npm run build`
3. **Build output directory**: `dist`
4. **Root directory**: `/` (leave blank)
5. Click **Save and Continue**

### 3. Set Environment Variables

1. Go to **Settings** → **Environment variables**
2. Add production environment variables:
   - `SANITY_PROJECT_ID=5v2kf6a1`
   - `SANITY_DATASET=production`
   - `SANITY_API_VERSION=2024-01-01`
   - `SANITY_READ_TOKEN=<your_viewer_token>`
   - `PUBLIC_SHOW_KIDS=false`
3. Click **Save**

### 4. Deploy

1. Click **Deploy site**
2. Wait for build to complete
3. Note the assigned *.pages.dev URL
4. Update this document with the actual URL

## Post-deployment Verification

### ✅ Functionality Tests

1. **Homepage loads** at the *.pages.dev URL
2. **Navigation works** for all menu items
3. **Sanity content displays**:
   - Site title matches `siteSettings.publicName`
   - Services page loads (even if empty)
   - Announcements display (even if empty)
4. **Kids content is hidden** (PUBLIC_SHOW_KIDS=false)
5. **Historical section works** with image gallery

### ✅ Content Updates Test

1. Go to Sanity Studio
2. Update `siteSettings.publicName`
3. Publish changes
4. Refresh the deployed site
5. Verify title updates (may take a few minutes)

## Build Configuration Details

### Astro Configuration

The project uses standard Astro configuration with:
- Tailwind CSS for styling
- Static site generation
- Client-side navigation
- Responsive design

### Build Process

```bash
# What happens during build:
npm run build
# 1. Astro checks for syntax errors
# 2. Builds all pages and components
# 3. Optimizes assets (CSS, JS, images)
# 4. Generates static files in /dist
# 5. Creates sitemap and manifest files
```

### Dependencies

Key dependencies for deployment:
- `astro`: Framework
- `@astrojs/tailwind`: Tailwind CSS integration
- `@sanity/client`: Sanity CMS integration
- `@portabletext/to-html`: Rich text rendering
- `tailwindcss`: CSS framework

## Troubleshooting

### Build Failures

1. Check build logs in Cloudflare Pages dashboard
2. Verify all dependencies are in `package.json`
3. Ensure environment variables are correctly set
4. Run `npm run build` locally to reproduce issues

### Content Not Loading

1. Verify `SANITY_READ_TOKEN` is valid and has Viewer permissions
2. Check that Sanity dataset contains published content
3. Ensure environment variables are correctly configured
4. Test Sanity connection: `npm run test:sanity`

### Images Not Loading

1. Verify historical images are deployed to `/historical/` paths
2. Check `manifest.json` paths match deployed locations
3. Ensure images are accessible via direct URLs

## Security Considerations

### ✅ Security Measures
- No secrets committed to repository
- Read-only Sanity token only
- Environment variables properly configured
- Kids content gated by environment variable

### 🔒 Recommendations
- Regularly rotate Sanity tokens
- Monitor build logs for errors
- Keep dependencies updated
- Review environment variable access

## Future Deployments

### Automatic Deployments

- Connected to GitHub main branch
- Automatic builds on push to main
- Manual deployments available via Cloudflare dashboard

### Custom Domain

- Custom domain (kirkjanokkar.is) setup planned for future
- DNS configuration required
- SSL certificates automatically managed

### Sanity Studio Deployment

- Sanity Studio deployment planned separately
- Will require additional configuration
- Admin access control needed

## Support

For deployment issues:

1. Check Cloudflare Pages build logs
2. Verify environment variables
3. Test locally with `npm run test:smoke`
4. Review this documentation
5. Contact Cloudflare support if platform issues

## Deployment History

- **Initial Deployment**: [Date] - Step 11 completion
- **URL**: [To be filled after deployment]
- **Status**: Active
