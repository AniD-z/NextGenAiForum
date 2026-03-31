import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Young Professionals & Women in Engineering | NextGenAIForum 2027',
  description:
    'Join NextGenAIForum community initiatives for Young Professionals and Women in Engineering focused on mentorship, leadership, inclusion, and AI career growth.',
  path: '/community',
  keywords: [
    'young professionals',
    'women in engineering',
    'AI mentorship',
    'career development',
    'diversity in AI',
    'professional networking',
  ],
});

export default MetadataLayout;