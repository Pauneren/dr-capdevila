# Kids Content Gating Checklist

## Overview
This document provides a manual checklist for managing kids content visibility on the website.

## Environment Variable Configuration

### ✅ Required Environment Variable
- `PUBLIC_SHOW_KIDS` - Controls visibility of kids content
  - Set to `'true'` to show kids content
  - Set to `'false'` or leave unset to hide kids content

### ✅ Configuration Steps
1. Copy `.env.example` to `.env` if not already done
2. Set `PUBLIC_SHOW_KIDS=true` in `.env` to enable kids content
3. Restart the development server after changing the value

## Content Areas Affected

### ✅ Safnaðarstarf Page (/safnadarstarf)
- When `PUBLIC_SHOW_KIDS=true`: Shows two additional cards
  - "Barnaefni" - Links to `/barn`
  - "Námskeið fyrir börn" - Links to `/lessons`
- When `PUBLIC_SHOW_KIDS=false` or unset: These cards are hidden

### ✅ Kids Routes
- `/barn` - Kids content page with stories, activities, prayers, and songs
- `/lessons` - Educational courses and lessons for children
- Both routes have gating logic that redirects to `/safnadarstarf` when kids content is disabled

## Testing Checklist

### ✅ Test Kids Content Disabled (Default)
1. Ensure `PUBLIC_SHOW_KIDS` is not set or set to `'false'`
2. Navigate to `/safnadarstarf`
3. Verify no purple "Barnaefni" or "Námskeið fyrir börn" cards are visible
4. Try accessing `/barn` directly - should redirect to `/safnadarstarf`
5. Try accessing `/lessons` directly - should redirect to `/safnadarstarf`

### ✅ Test Kids Content Enabled
1. Set `PUBLIC_SHOW_KIDS=true` in `.env`
2. Restart development server
3. Navigate to `/safnadarstarf`
4. Verify two purple cards are visible at the bottom
5. Click "Barnaefni" link - should navigate to `/barn`
6. Click "Námskeið fyrir börn" link - should navigate to `/lessons`
7. Verify both pages load correctly with full content

## Content Management

### ✅ Kids Content Pages
- `/barn` page includes:
  - Biblical stories (Noah, David & Goliath, Jonah)
  - Fun activities (coloring, games, crafts)
  - Children's prayers (morning, evening, mealtime)
  - Songs and music (children's hymns, Christian songs)

- `/lessons` page includes:
  - Basic Christian faith course (6-12 years)
  - Life of Jesus course
  - Early Christians course
  - Special themed courses (Easter, Christmas, Prayer, Stewardship)

### ✅ Visual Design
- Kids content uses purple color scheme to distinguish from regular content
- Consistent iconography and layout
- Age-appropriate content organization
- Parent/teacher guidance sections included

## Security Considerations

### ✅ Access Control
- Kids content is completely inaccessible when gating is disabled
- Direct URL access is blocked with redirects
- No content leakage through navigation or links

### ✅ Environment Safety
- Environment variable is properly checked with strict equality (`=== 'true'`)
- No fallback behavior that could accidentally expose content
- Clear visual distinction when content is enabled vs disabled

## Deployment Checklist

### ✅ Production Deployment
1. Set `PUBLIC_SHOW_KIDS=false` in production environment if kids content should be hidden
2. Set `PUBLIC_SHOW_KIDS=true` in production environment if kids content should be visible
3. Test both states in staging environment before production deployment
4. Verify environment variable is properly set in hosting platform

### ✅ Development Setup
1. Ensure `.env.example` includes `PUBLIC_SHOW_KIDS=false` as default
2. Document in team onboarding how to toggle kids content
3. Add to deployment scripts if automated deployment is used

## Troubleshooting

### ✅ Common Issues
- **Content still showing after disabling**: Restart development server
- **Content not showing after enabling**: Check for typos in environment variable name
- **Direct access still working**: Verify environment variable is properly loaded
- **404 errors**: Ensure pages are properly deployed and routing is configured

### ✅ Debug Steps
1. Check current value: `console.log(import.meta.env.PUBLIC_SHOW_KIDS)`
2. Verify `.env` file exists and is properly formatted
3. Check for caching issues - clear browser cache if needed
4. Verify Astro environment variable loading is working correctly

## Maintenance

### ✅ Regular Tasks
- Review kids content for age-appropriateness
- Update content based on feedback from children, parents, and teachers
- Test gating functionality after major updates
- Update checklist if new kids content areas are added

### ✅ Content Updates
- All kids content updates should respect the gating mechanism
- New kids pages should include the same gating logic
- Navigation updates should consider kids content visibility
