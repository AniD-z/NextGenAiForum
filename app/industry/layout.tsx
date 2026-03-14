import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Industry Engagement | NextGenAIForum 2027',
  description:
    'Discover how NextGenAIForum connects enterprises, government, PSUs, startups, and researchers to solve real-world AI challenges through collaboration and technology transfer.',
  path: '/industry',
  keywords: [
    'industry engagement',
    'enterprise AI collaboration',
    'technology transfer',
    'startup ecosystem',
    'government AI challenges',
    'industry partnership conference',
  ],
});

export default MetadataLayout;