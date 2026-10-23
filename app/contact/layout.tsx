import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact NextGenAIForum 2027',
  description:
    'Email the NextGenAIForum 2027 team at navinkumar@ieee.org for all inquiries.',
  path: '/contact',
  keywords: [
    'contact NextGenAIForum',
    'NextGenAIForum email',
    'navinkumar@ieee.org',
  ],
});

export default MetadataLayout;