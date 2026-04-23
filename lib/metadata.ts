import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://thetechhub.local'
const siteName = 'The Tech Hub'
const description = 'End to end tech support for home and business. PC repair, custom builds, networking, fiber internet and more in Rochelle, IL.'

export function createMetadata(
  title: string,
  ogTitle?: string,
  metaDescription?: string
): Metadata {
  return {
    title: `${title} | ${siteName}`,
    description: metaDescription || description,
    keywords: ['tech support', 'PC repair', 'networking', 'Rochelle IL', 'computer repair'],
    openGraph: {
      title: ogTitle || `${title} | ${siteName}`,
      description: metaDescription || description,
      url: baseUrl,
      siteName,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export const defaultMetadata: Metadata = {
  title: `${siteName} — End to End Tech Support in Rochelle, IL`,
  description,
  metadataBase: new URL(baseUrl),
  keywords: ['tech support', 'PC repair', 'custom builds', 'networking', 'Rochelle', 'Illinois'],
  openGraph: {
    title: `${siteName} — End to End Tech Support`,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Tech Hub',
      },
    ],
  },
}
