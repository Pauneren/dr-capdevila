# Project Handoff Guide

## Environment Configuration

This project uses environment variables to configure Sanity CMS access and feature flags. Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

### Required Environment Variables

- `SANITY_PROJECT_ID`: Your Sanity project ID (default: 5v2kf6a1)
- `SANITY_DATASET`: The dataset to use (default: production)
- `SANITY_API_VERSION`: Sanity API version (default: 2024-01-01)
- `SANITY_READ_TOKEN`: Read-only token for accessing private datasets
- `PUBLIC_SHOW_KIDS`: Controls visibility of kids content ('true'/'false', default: 'false')

## Creating a Sanity Viewer Token

If your Sanity dataset is private, you need to create a Viewer token:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Navigate to **API** tab
4. Click **Add API token**
5. Choose **Viewer** permissions (read-only access)
6. Give it a descriptive name (e.g., "Production Website")
7. Copy the generated token
8. Add it to your `.env` file as `SANITY_READ_TOKEN=your_token_here`

### Token Placement

Place the token in your local `.env` file (this file is not committed to git):

```
SANITY_READ_TOKEN=sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

For production deployments, add the environment variable to your hosting platform's environment settings.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   cd sanity && npm install
   ```

2. Start development servers:
   ```bash
   # Terminal 1: Astro frontend
   npm run dev
   
   # Terminal 2: Sanity studio
   cd sanity && npm run dev
   ```

3. Access points:
   - Frontend: http://localhost:4321
   - Sanity Studio: http://localhost:3333

## Running the Application

### Astro Frontend

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Sanity Studio

```bash
cd sanity

# Development studio
npm run dev

# Build studio
npm run build

# Deploy studio
npm run deploy
```

## Testing

The project includes automated tests to verify functionality:

```bash
# Test Sanity connection and data fetching
npm run test:sanity

# Test route building and rendering
npm run test:routes

# Run all smoke tests
npm run test:smoke
```

### Test Descriptions

- **test:sanity**: Verifies Sanity connectivity and tests all query functions
- **test:routes**: Builds the project and checks that all core routes render correctly
- **test:smoke**: Runs both Sanity and route tests for complete validation

## Content Management

### Adding Services

1. Go to Sanity Studio (http://localhost:3333)
2. Navigate to **Services**
3. Click **Add new service**
4. Fill in required fields:
   - **Title**: Service name
   - **Start DateTime**: Date and time of the service
   - **Location**: Church location (Ólafsvík or Ingjaldshóll)
   - **Description**: Optional service description
   - **Is Canceled**: Check if service is canceled
5. Click **Publish**

### Adding Announcements

1. Go to Sanity Studio
2. Navigate to **Announcements**
3. Click **Add new announcement**
4. Fill in required fields:
   - **Title**: Announcement title
   - **Date**: Announcement date
   - **Body**: Full announcement text
   - **Link**: Optional external link
   - **Pinned**: Pin to top of lists
5. Click **Publish**

### Managing Site Settings

1. Go to Sanity Studio
2. Navigate to **Site settings** (singleton document)
3. Update fields:
   - **Public Name**: Display name for the site
   - **Canonical Name**: Formal name
   - **Domain Policy Text**: Footer policy text
   - **Locations**: Church contact information
4. Click **Publish**

### Kids Content Gating

To show/hide kids content:

1. Set `PUBLIC_SHOW_KIDS=true` in `.env` to enable kids content
2. Set `PUBLIC_SHOW_KIDS=false` or remove the variable to disable
3. Restart the development server after changing the value
4. When enabled, kids content links appear in `/safnadarstarf`
5. When disabled, `/barn` and `/lessons` routes redirect to `/safnadarstarf`

## Historical Content

### Source vs Public Content

**Source Content (resources/historical/_work/)**
- Original extracted files from old website
- Never directly exposed to the public
- Used for content migration and reference
- Located in `resources/historical/_work/` (gitignored)

**Public Content (resources/historical/)**
- Curated and processed historical content
- Exposed through the historical section
- Uses `manifest.json` for image metadata
- Located in `resources/historical/` (version controlled)

### Historical Archive Access

- Historical content is accessible via `/sogulegt` page
- Images are served from `/historical/{filename}` paths
- Never reference `resources/**` paths in production
- Use `publishedPath` from manifest.json for image URLs

### Content Migration

The historical content inventory is in `resources/historical/manifest.text-index.json`:
- Lists all available historical content
- Includes suggested destinations (sanity:page vs sanity:historical-article)
- Provides summaries and categorization
- Ready for future content migration

## Project Structure

```
├── src/
│   ├── lib/
│   │   ├── sanity.ts          # Sanity client and query functions
│   │   └── historical.ts      # Historical content loader
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── gudsthjonustur.astro # Services page
│   │   ├── sogulegt.astro     # Historical content
│   │   └── ...                # Other pages
│   └── layouts/
│       └── Layout.astro       # Main layout with navigation
├── sanity/
│   ├── schema/                # Sanity schemas
│   └── sanity.config.ts       # Sanity configuration
├── resources/
│   └── historical/
│       ├── manifest.json      # Image metadata
│       ├── manifest.text-index.json # Text content inventory
│       └── _work/              # Extracted source files (gitignored)
├── docs/
│   └── HANDOFF.md             # This documentation
└── test-*.js                  # Test scripts
```

## Troubleshooting

### 401 Authentication Errors

If you see "Sanity authentication failed" in the console:

1. Check that `SANITY_READ_TOKEN` is set in your `.env` file
2. Verify the token has Viewer permissions
3. Ensure the token hasn't expired
4. Confirm the token is for the correct project and dataset

### Missing Environment Variables

The application will use default values if environment variables are not set, but private datasets will require a valid `SANITY_READ_TOKEN`.

### Build Errors

If the build fails:

1. Run `npm run test:routes` to check for route issues
2. Check for syntax errors in Astro components
3. Verify all imports are correct
4. Ensure environment variables are properly set

### Content Not Showing

If Sanity content doesn't appear:

1. Run `npm run test:sanity` to check connection
2. Verify content is published in Sanity Studio
3. Check environment variables
4. Ensure dataset contains the expected content

## Deployment

### Production Environment Variables

Set these in your hosting platform:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_READ_TOKEN=your_production_token
PUBLIC_SHOW_KIDS=false
```

### Build Process

```bash
# Run tests first
npm run test:smoke

# Build for production
npm run build

# Deploy the dist/ folder
```

### Historical Images

Ensure historical images are deployed to `/historical/` paths:
- Images should be accessible at `/historical/{filename}`
- Verify `manifest.json` paths match deployed locations
- Test image loading in the historical section

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Run the test scripts to identify problems
3. Review the console for error messages
4. Check Sanity Studio for content issues
5. Verify environment configuration
