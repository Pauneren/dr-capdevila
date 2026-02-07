export interface HistoricalImage {
  filename: string
  source: string
  originalPath: string
  description: string
  publishedPath: string
}

export interface HistoricalManifest {
  images: HistoricalImage[]
  docs: any[]
}

interface RawManifestImage {
  filename: string
  source: string
  originalPath: string
  description: string
}

interface RawManifest {
  images: RawManifestImage[]
  docs: any[]
}

export async function getHistoricalManifest(): Promise<HistoricalManifest> {
  try {
    const manifestFile = await import('../../resources/historical/manifest.json')
    const rawManifest = manifestFile.default as RawManifest
    
    // Add publishedPath to each image
    const imagesWithPaths = rawManifest.images.map(image => ({
      ...image,
      publishedPath: `/historical/${image.filename}`
    }))
    
    return {
      ...rawManifest,
      images: imagesWithPaths
    }
  } catch (error) {
    console.error('Error loading historical manifest:', error)
    return {
      images: [],
      docs: []
    }
  }
}

export async function getHistoricalImages(limit?: number): Promise<HistoricalImage[]> {
  const manifest = await getHistoricalManifest()
  const images = manifest.images
  return limit ? images.slice(0, limit) : images
}
