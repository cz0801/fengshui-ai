type GenerateMetadataOptions = {
  title: string
  description: string
  canonical: string
  keywords?: string[]
  image?: {
    url: string
    width?: number
    height?: number
    alt?: string
  }
}

export function generateMetadata({
  title,
  description,
  canonical,
  keywords = [
    'AI Feng Shui',
    'free feng shui generator',
    'room layout analysis',
    'feng shui report',
    'energy flow analysis',
    'personalized feng shui insights',
    'apartment feng shui',
    'five elements balance'
  ],
  image = {
    url: 'https://www.aifengshui.app/images/og-image.png',
    width: 1200,
    height: 630,
    alt: 'AI Feng Shui Generator Screenshot'
  }
}: GenerateMetadataOptions) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'AI Feng Shui',
      images: [image],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
      site: '@ZhuoChen6876'
    }
  }
}