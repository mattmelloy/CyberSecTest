import { Metadata } from 'next';
import AdvancedQuiz from '@/components/AdvancedQuiz';

export const metadata: Metadata = {
  title: 'NIST 800-53 Security Assessment - Detailed Analysis',
  description: 'Comprehensive NIST 800-53 based security assessment for detailed analysis of your organization\'s security controls.',
  alternates: {
    canonical: 'https://cybersectest.com/advanced-assessment',
  },
};

export default function AdvancedAssessmentPage() {
  return <AdvancedQuiz />;
}