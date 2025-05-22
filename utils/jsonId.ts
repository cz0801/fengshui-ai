type ArticleJsonLdOptions = {
  headline: string
  description: string
  image: string
  mainEntityId: string
  datePublished: string
  dateModified: string
}

export function generateArticleJsonLd({
  headline,
  description,
  image,
  mainEntityId,
  datePublished,
  dateModified
}: ArticleJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    author: {
      "@type": "Organization",
      name: "aifengshui.app",
      url: "https://www.aifengshui.app",
    },
    publisher: {
      "@type": "Organization",
      name: "aifengshui.app",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aifengshui.app/images/logo.png",
        width: 270,
        height: 120,
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": mainEntityId,
    },
  }
}