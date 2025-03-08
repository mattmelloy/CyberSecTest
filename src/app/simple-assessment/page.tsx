import { Metadata } from 'next';
import SimpleQuiz from '@/components/SimpleQuiz';

export const metadata: Metadata = {
  title: 'Simple Cybersecurity Assessment - Quick Security Check',
  description: 'Take our quick 10-question cybersecurity assessment to evaluate your business security posture and get instant recommendations.',
  alternates: {
    canonical: 'https://cybersectest.com/simple-assessment',
  },
};

export default function SimpleAssessmentPage() {
  return <SimpleQuiz />;
}