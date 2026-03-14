import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About NextGenAIForum 2027',
  description:
    'Learn how NextGenAIForum connects AI research, industrial deployment, and global standards to accelerate innovation, collaboration, and strategic AI autonomy.',
  path: '/about',
  keywords: [
    'about NextGenAIForum',
    'AI research collaboration',
    'technology transfer',
    'AI standards',
    'indigenous R&D',
    'AI innovation platform',
  ],
});

export default MetadataLayout;