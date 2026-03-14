import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Sponsors & Partners | NextGenAIForum 2027',
  description:
    'Explore sponsorship packages and partnership opportunities to showcase your brand and connect with researchers, founders, policymakers, and industry leaders.',
  path: '/sponsors',
  keywords: [
    'conference sponsorship',
    'event partners',
    'brand visibility',
    'AI conference sponsors',
    'partnership opportunities',
    'NextGenAIForum sponsors',
  ],
});

export default MetadataLayout;