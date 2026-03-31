import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Conference Program | NextGenAIForum 2027',
  description:
    'Explore the two-day NextGenAIForum 2027 program featuring keynotes, technical sessions, panels, workshops, industry engagement, and networking in Bangalore.',
  path: '/program',
  keywords: [
    'conference program',
    'AI conference schedule',
    'keynotes and workshops',
    'research sessions',
    'industry engagement',
    'NextGenAIForum schedule',
  ],
});

export default MetadataLayout;