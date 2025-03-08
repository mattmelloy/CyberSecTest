import { Metadata } from 'next';
import TermsOfService from '@/components/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service - Cybersecurity Assessment Tool',
  description: 'Terms and conditions for using our cybersecurity assessment and advisory services.',
  alternates: {
    canonical: 'https://cybersectest.com/terms',
  },
};

export default function TermsPage() {
  return <TermsOfService />;
}