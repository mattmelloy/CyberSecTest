import { Metadata } from 'next';
import FreeTools from '@/components/FreeTools';

export const metadata: Metadata = {
  title: 'Free Cybersecurity Tools for Small Business',
  description: 'Access free cybersecurity tools and resources to protect your business from cyber threats.',
  alternates: {
    canonical: 'https://cybersectest.com/freesecuritytools',
  },
};

export default function FreeToolsPage() {
  return <FreeTools />;
}