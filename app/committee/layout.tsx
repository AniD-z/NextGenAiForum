import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Committee | NextGenAIForum 2027',
  description:
    'Review the NextGenAIForum committee structure, including the Steering Committee, Executive Chair, General Co-Chairs, and Technical Program Committee.',
  path: '/committee',
  keywords: [
    'conference committee',
    'steering committee',
    'executive chair',
    'general co-chairs',
    'technical program committee',
    'conference leadership',
  ],
});

export default MetadataLayout;