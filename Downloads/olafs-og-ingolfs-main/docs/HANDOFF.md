# Project Handoff Guide

## Environment Configuration

This project uses environment variables to configure Sanity CMS access. Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

### Required Environment Variables

- `SANITY_PROJECT_ID`: Your Sanity project ID (default: 5v2kf6a1)
- `SANITY_DATASET`: The dataset to use (default: production)
- `SANITY_API_VERSION`: Sanity API version (default: 2024-01-01)
- `SANITY_READ_TOKEN`: Read-only token for accessing private datasets

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

## Troubleshooting

### 401 Authentication Errors

If you see "Sanity authentication failed" in the console:

1. Check that `SANITY_READ_TOKEN` is set in your `.env` file
2. Verify the token has Viewer permissions
3. Ensure the token hasn't expired
4. Confirm the token is for the correct project and dataset

### Missing Environment Variables

The application will use default values if environment variables are not set, but private datasets will require a valid `SANITY_READ_TOKEN`.
