#!/usr/bin/env node

/**
 * Smoke test for core routes
 * Tests that all important pages can be built and rendered without errors
 */

import { build } from 'astro'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const coreRoutes = [
  '/',
  '/gudsthjonustur',
  '/athafnir',
  '/safnadarstarf',
  '/tengilidir',
  '/sogulegt',
  '/tilkynningar'
]

const conditionalRoutes = [
  '/barn',        // Only when PUBLIC_SHOW_KIDS=true
  '/lessons'      // Only when PUBLIC_SHOW_KIDS=true
]

async function testRouteBuild() {
  console.log('🧪 Testing Astro build and core routes...')
  
  try {
    // Test build process
    console.log('🏗️  Building project...')
    const buildResult = await build({
      root: __dirname
    })
    
    if (buildResult) {
      console.log('✅ Build completed successfully')
    } else {
      console.log('⚠️  Build completed but no result returned')
    }

    // Check that core pages exist in build output
    console.log('\n📄 Checking core route files...')
    const distDir = join(__dirname, 'dist')
    
    for (const route of coreRoutes) {
      const expectedFile = join(distDir, route === '/' ? 'index.html' : `${route}.html`)
      try {
        const stats = await import('fs').then(fs => fs.statSync(expectedFile))
        if (stats.isFile()) {
          console.log(`✅ ${route}: File exists`)
        } else {
          console.log(`❌ ${route}: Not a file`)
        }
      } catch (error) {
        console.log(`❌ ${route}: File not found (${expectedFile})`)
      }
    }

    // Check conditional routes based on environment
    console.log('\n🔧 Checking conditional routes...')
    const showKids = process.env.PUBLIC_SHOW_KIDS === 'true'
    
    for (const route of conditionalRoutes) {
      const expectedFile = join(distDir, `${route}.html`)
      try {
        const stats = await import('fs').then(fs => fs.statSync(expectedFile))
        if (stats.isFile()) {
          if (showKids) {
            console.log(`✅ ${route}: File exists (PUBLIC_SHOW_KIDS=true)`)
          } else {
            console.log(`⚠️  ${route}: File exists but PUBLIC_SHOW_KIDS=false (should redirect)`)
          }
        } else {
          if (showKids) {
            console.log(`❌ ${route}: File not found but PUBLIC_SHOW_KIDS=true`)
          } else {
            console.log(`✅ ${route}: File not found (PUBLIC_SHOW_KIDS=false, correct)`)
          }
        }
      } catch (error) {
        if (showKids) {
          console.log(`❌ ${route}: File not found but PUBLIC_SHOW_KIDS=true`)
        } else {
          console.log(`✅ ${route}: File not found (PUBLIC_SHOW_KIDS=false, correct)`)
        }
      }
    }

    console.log('\n🎉 Route smoke tests completed!')
    return true

  } catch (error) {
    console.error('❌ Route build test FAILED:', error.message)
    
    if (error.message.includes('ENOENT')) {
      console.log('\n💡 TIP: Check that all required files exist and paths are correct')
    } else if (error.message.includes('build')) {
      console.log('\n💡 TIP: Check for syntax errors in Astro components or missing imports')
    }
    
    return false
  }
}

// Run the test
testRouteBuild().then(success => {
  process.exit(success ? 0 : 1)
}).catch(error => {
  console.error('💥 Unexpected error:', error)
  process.exit(1)
})
