import {createClient} from '@sanity/client'

const sanity = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || '5v2kf6a1',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: import.meta.env.SANITY_READ_TOKEN,
})

export async function getSiteSettings(): Promise<{
  publicName?: string;
  canonicalName?: string;
  domainPolicyText?: string;
  locations?: Array<{
    name: string;
    address: string;
    mapLink: string;
    phone?: string;
    email?: string;
  }>;
} | null> {
  try {
    const result = await sanity.fetch<{
      publicName?: string;
      canonicalName?: string;
      domainPolicyText?: string;
      locations?: Array<{
        name: string;
        address: string;
        mapLink: string;
        phone?: string;
        email?: string;
      }>;
    } | null>(`
      *[_type == "siteSettings"][0]{ 
        publicName,
        canonicalName,
        domainPolicyText,
        locations
      }
    `)
    return result ?? null
  } catch (error) {
    if (error instanceof Error && error.message.includes('401')) {
      console.error('Sanity authentication failed. Please check your SANITY_READ_TOKEN environment variable.')
      console.error('To create a Viewer token, see: docs/HANDOFF.md')
    }
    throw error
  }
}
