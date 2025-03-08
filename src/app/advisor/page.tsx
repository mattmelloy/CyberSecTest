import { Metadata } from 'next';
import SecurityAdvisor from '@/components/SecurityAdvisor';

export const metadata: Metadata = {
  title: 'Cybersecurity Advisor - Expert Security Guidance',
  description: 'Get expert cybersecurity advice and recommendations from our AI-powered security advisor.',
  alternates: {
    canonical: 'https://cybersectest.com/advisor',
  },
};

export default function AdvisorPage() {
  return <SecurityAdvisor />;
}