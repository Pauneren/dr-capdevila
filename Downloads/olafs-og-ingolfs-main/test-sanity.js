#!/usr/bin/env node

/**
 * Simple smoke test for Sanity query functions
 * Tests basic connectivity and data fetching
 */

import { getSiteSettings, getServices, getAnnouncements } from './src/lib/sanity.js'

async function testSanityConnection() {
  console.log('🧪 Testing Sanity connection...')
  
  try {
    // Test site settings
    console.log('📋 Testing getSiteSettings...')
    const siteSettings = await getSiteSettings()
    if (siteSettings) {
      console.log('✅ getSiteSettings: SUCCESS')
      console.log(`   - publicName: ${siteSettings.publicName || 'N/A'}`)
      console.log(`   - canonicalName: ${siteSettings.canonicalName || 'N/A'}`)
      console.log(`   - locations: ${siteSettings.locations?.length || 0} locations`)
    } else {
      console.log('⚠️  getSiteSettings: No data returned (may be expected if empty)')
    }

    // Test services
    console.log('\n⛪ Testing getServices...')
    const services = await getServices()
    if (services && services.length > 0) {
      console.log('✅ getServices: SUCCESS')
      console.log(`   - Found ${services.length} services`)
      console.log(`   - First service: ${services[0].title || 'N/A'}`)
    } else {
      console.log('⚠️  getServices: No services found (may be expected if empty)')
    }

    // Test announcements
    console.log('\n📢 Testing getAnnouncements...')
    const announcements = await getAnnouncements()
    if (announcements && announcements.length > 0) {
      console.log('✅ getAnnouncements: SUCCESS')
      console.log(`   - Found ${announcements.length} announcements`)
      console.log(`   - First announcement: ${announcements[0].title || 'N/A'}`)
    } else {
      console.log('⚠️  getAnnouncements: No announcements found (may be expected if empty)')
    }

    console.log('\n🎉 Sanity connection tests completed!')
    return true

  } catch (error) {
    console.error('❌ Sanity connection test FAILED:', error.message)
    
    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      console.log('\n💡 TIP: Check your SANITY_READ_TOKEN environment variable')
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 TIP: Check your SANITY_PROJECT_ID and network connection')
    }
    
    return false
  }
}

// Run the test
testSanityConnection().then(success => {
  process.exit(success ? 0 : 1)
}).catch(error => {
  console.error('💥 Unexpected error:', error)
  process.exit(1)
})
