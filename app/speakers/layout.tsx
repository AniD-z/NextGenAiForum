import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Speakers | NextGenAIForum 2027',
  description:
    'Meet the keynote speakers, industry leaders, research experts, and policy voices shaping the agenda at NextGenAIForum 2027.',
  path: '/speakers',
  keywords: [
    'AI conference speakers',
    'keynote speakers',
    'industry experts',
    'research leaders',
    'policy experts',
    'NextGenAIForum speakers',
  ],
});

export default MetadataLayout;