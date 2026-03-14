import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact NextGenAIForum 2027',
  description:
    'Contact the NextGenAIForum team for registration, sponsorship, media, speaking, support, and general conference inquiries.',
  path: '/contact',
  keywords: [
    'contact NextGenAIForum',
    'conference support',
    'registration inquiries',
    'sponsorship contact',
    'media contact',
    'event help desk',
  ],
});

export default MetadataLayout;