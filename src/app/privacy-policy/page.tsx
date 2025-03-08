import { Metadata } from 'next';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy - Cybersecurity Assessment Tool',
  description: 'Our privacy policy explains how we protect your data and maintain confidentiality.',
  alternates: {
    canonical: 'https://cybersectest.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}