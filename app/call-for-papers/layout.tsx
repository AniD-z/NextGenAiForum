import type { Metadata } from 'next';
import { buildMetadata, MetadataLayout } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Call for Papers | NextGenAIForum 2027',
  description:
    'Submit original research to NextGenAIForum 2027 across Generative AI, agentic systems, AI infrastructure, safety, standards, and strategic autonomy.',
  path: '/call-for-papers',
  keywords: [
    'call for papers',
    'AI research submission',
    'conference paper submission',
    'peer review',
    'generative AI research',
    'agentic systems research',
  ],
});

export default MetadataLayout;