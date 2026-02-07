import {createClient} from '@sanity/client'

const sanity = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || '5v2kf6a1',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: import.meta.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: import.meta.env.SANITY_READ_TOKEN,
})

export async function getServices(location?: string): Promise<Array<{
  _id: string;
  title: string;
  startDateTime: string;
  location: string;
  description?: string;
  isCanceled?: boolean;
}> | null> {
  try {
    const locationFilter = location ? `&& location == "${location}"` : '';
    const result = await sanity.fetch<Array<{
      _id: string;
      title: string;
      startDateTime: string;
      location: string;
      description?: string;
      isCanceled?: boolean;
    }>>(`
      *[_type == "service" ${locationFilter}] | order(startDateTime asc) {
        _id,
        title,
        startDateTime,
        location,
        description,
        isCanceled
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

export async function getUpcomingServices(location?: string): Promise<Array<{
  _id: string;
  title: string;
  startDateTime: string;
  location: string;
  description?: string;
  isCanceled?: boolean;
}> | null> {
  try {
    const locationFilter = location ? `&& location == "${location}"` : '';
    const now = new Date().toISOString();
    const result = await sanity.fetch<Array<{
      _id: string;
      title: string;
      startDateTime: string;
      location: string;
      description?: string;
      isCanceled?: boolean;
    }>>(`
      *[_type == "service" && startDateTime >= "${now}" ${locationFilter}] | order(startDateTime asc) {
        _id,
        title,
        startDateTime,
        location,
        description,
        isCanceled
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

export async function getPastServices(location?: string): Promise<Array<{
  _id: string;
  title: string;
  startDateTime: string;
  location: string;
  description?: string;
  isCanceled?: boolean;
}> | null> {
  try {
    const locationFilter = location ? `&& location == "${location}"` : '';
    const now = new Date().toISOString();
    const result = await sanity.fetch<Array<{
      _id: string;
      title: string;
      startDateTime: string;
      location: string;
      description?: string;
      isCanceled?: boolean;
    }>>(`
      *[_type == "service" && startDateTime < "${now}" ${locationFilter}] | order(startDateTime desc) {
        _id,
        title,
        startDateTime,
        location,
        description,
        isCanceled
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

export async function getNextService(): Promise<{
  _id: string;
  title: string;
  startDateTime: string;
  location: string;
  description?: string;
  isCanceled?: boolean;
} | null> {
  try {
    const now = new Date().toISOString();
    const result = await sanity.fetch<{
      _id: string;
      title: string;
      startDateTime: string;
      location: string;
      description?: string;
      isCanceled?: boolean;
    } | null>(`
      *[_type == "service" && startDateTime >= "${now}" && !isCanceled] | order(startDateTime asc) [0] {
        _id,
        title,
        startDateTime,
        location,
        description,
        isCanceled
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

export async function getAnnouncements(limit?: number): Promise<Array<{
  _id: string;
  title: string;
  date: string;
  body: string;
  link?: string;
  pinned?: boolean;
}> | null> {
  try {
    const limitClause = limit ? `[0...${limit}]` : '';
    const result = await sanity.fetch<Array<{
      _id: string;
      title: string;
      date: string;
      body: string;
      link?: string;
      pinned?: boolean;
    }>>(`
      *[_type == "announcement"] | order(pinned desc, date desc) ${limitClause} {
        _id,
        title,
        date,
        body,
        link,
        pinned
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
