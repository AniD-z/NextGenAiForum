import type { Metadata } from 'next';

export const siteMetadata = {
  name: 'NextGenAIForum 2027',
  shortName: 'NextGenAIForum',
  url: 'https://nextgenaiforum.org',
  defaultImage: '/images/hero.jpeg',
  locale: 'en_US',
};

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      type: 'website',
      images: [
        {
          url: siteMetadata.defaultImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteMetadata.defaultImage],
    },
  };
}

export function MetadataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}