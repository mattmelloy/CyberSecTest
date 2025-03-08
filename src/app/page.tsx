import { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Cyber Security Assessment for Small Businesses',
  alternates: {
    canonical: 'https://cybersectest.com',
  },
};

export default function Home() {
  return <HomePage />;
}