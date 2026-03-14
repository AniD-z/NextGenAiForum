import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'News & Updates | NextGenAIForum 2027',
  description:
    'Read the latest announcements, important dates, speaker news, and program updates for NextGenAIForum 2027.',
  path: '/news',
  keywords: [
    'conference news',
    'event announcements',
    'speaker updates',
    'important dates',
    'AI conference updates',
    'NextGenAIForum news',
  ],
});

export default MetadataLayout;