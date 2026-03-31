import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Venue | NextGenAIForum 2027 in Bangalore',
  description:
    'Plan your visit to NextGenAIForum 2027 in Bangalore with venue details, travel guidance, accommodation options, and local information.',
  path: '/venue',
  keywords: [
    'Bangalore conference venue',
    'AI conference Bangalore',
    'travel information',
    'accommodation',
    'India technology hub',
    'event location',
  ],
});

export default MetadataLayout;