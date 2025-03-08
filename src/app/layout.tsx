import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cybersectest.com'),
  title: 'Cyber Security Assessment for Small Businesses',
  description: 'Free cybersecurity self-assessment for small businesses. Instant insights and actionable recommendations to protect your business from cyber threats.',
  keywords: 'cybersecurity, cyber security, it security, network security, computer security, information security, small business security, security assessment, cyber threats, data protection, ransomware protection, phishing prevention, free security tools',
  authors: [{ name: 'Cybersecurity Assessment Tool' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Cyber Security Assessment and Free Tools for Small Business',
    description: 'Free cybersecurity self-assessment tool for small businesses. Get instant insights and actionable recommendations.',
    type: 'website',
    url: 'https://cybersectest.com',
    images: [{
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop',
      width: 2574,
      height: 1200,
      alt: 'Cybersecurity Assessment'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Assessment Tool for Small Businesses',
    description: 'Free cybersecurity self-assessment tool for small businesses. Get instant insights and actionable recommendations.',
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop'],
  },
  verification: {
    google: 'G-P5WP305N2H',
  },
  alternates: {
    canonical: 'https://cybersectest.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-7371589468101799"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P5WP305N2H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P5WP305N2H');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Cybersecurity Assessment Tool",
              "url": "https://cybersectest.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cybersectest.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Free cybersecurity self-assessment tool for small businesses. Get instant insights and actionable recommendations to protect your business from cyber threats.",
              "publisher": {
                "@type": "Organization",
                "name": "Cybersecurity Assessment Tool",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cybersectest.com/favicon.svg"
                }
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}