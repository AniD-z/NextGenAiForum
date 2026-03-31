import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Registration | NextGenAIForum 2027',
  description:
    'Register for NextGenAIForum 2027 and compare student, professional, and industry conference passes with access to sessions, workshops, and networking.',
  path: '/registration',
  keywords: [
    'conference registration',
    'AI event tickets',
    'registration tiers',
    'student pass',
    'industry pass',
    'NextGenAIForum registration',
  ],
});

export default MetadataLayout;