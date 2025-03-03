import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Shield, FileCheck2, MessageSquareText, ChevronDown, AlertCircle, CheckCircle2, ArrowRight, Users, Zap, AlertOctagon, DollarSign, Target, ChevronRight } from 'lucide-react';
import SimpleQuiz from './components/SimpleQuiz';
import AdvancedQuiz from './components/AdvancedQuiz';
import SecurityAdvisor from './components/SecurityAdvisor';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HomePage from './components/HomePage';

interface FAQ {
  question: string;
  answer: {
    text: string;
    advice: string;
    recommendation: string;
  };
}

const faqs: FAQ[] = [
  {
    question: "What are the most common cybersecurity risks for small businesses?",
    answer: {
      text: "Common risks include phishing scams, ransomware, weak passwords, and unpatched software.",
      advice: "Regularly train staff, use strong passwords with multi-factor authentication, and keep software updated.",
      recommendation: "Consider security suites like Bitdefender or Norton for comprehensive protection."
    }
  },
  {
    question: "How can I protect my business from phishing attacks?",
    answer: {
      text: "Phishing attacks use deceptive emails to steal sensitive information.",
      advice: "Educate employees to verify senders, use spam filters, and run regular simulated phishing tests.",
      recommendation: "Tools such as Barracuda Email Security can help filter out suspicious emails."
    }
  },
  {
    question: "Do I need antivirus software for my small business?",
    answer: {
      text: "Yes, antivirus software helps detect and block malicious software before it causes harm.",
      advice: "Install reputable antivirus software on all devices and update it regularly.",
      recommendation: "Products like McAfee Small Business Security or Kaspersky Small Office Security are good choices."
    }
  },
  {
    question: "What is ransomware, and how can I prevent it?",
    answer: {
      text: "Ransomware is malware that locks your data and demands payment for its release.",
      advice: "Back up data frequently, update all software, and avoid clicking on suspicious links or attachments.",
      recommendation: "Consider additional protection with solutions like Malwarebytes for malware detection."
    }
  },
  {
    question: "What is two-factor authentication (2FA), and should I use it?",
    answer: {
      text: "2FA adds an extra verification step—such as a text code or authenticator app—when logging in.",
      advice: "Enable 2FA on all critical accounts to add a strong layer of security.",
      recommendation: "Free apps like Google Authenticator or Authy are easy to set up."
    }
  },
  {
    question: "How can I train my employees on cybersecurity?",
    answer: {
      text: "Employee training is essential to help your team recognize and avoid cyber threats.",
      advice: "Use regular online training sessions and simulated phishing exercises.",
      recommendation: "Platforms like KnowBe4 or SANS Security Awareness provide user-friendly training modules."
    }
  },
  {
    question: "How can I secure my business's Wi-Fi network?",
    answer: {
      text: "Securing your Wi-Fi involves changing default passwords, using strong encryption (WPA2/WPA3), and limiting access to trusted devices.",
      advice: "Regularly update your router firmware and hide your network name to deter unauthorized access.",
      recommendation: "Consider routers from brands like Netgear or Linksys that offer robust security features."
    }
  },
  {
    question: "How often should I back up my business data?",
    answer: {
      text: "Frequent backups are critical; daily or weekly backups are recommended depending on your data changes.",
      advice: "Use both local and cloud-based backups for added safety.",
      recommendation: "Backup services such as Backblaze or Carbonite are trusted by many small businesses."
    }
  },
  {
    question: "What are the signs my business has been hacked?",
    answer: {
      text: "Signs include unexpected system slowdowns, unusual account activity, and unauthorized changes to files.",
      advice: "Regularly monitor your systems and use security software to alert you of suspicious behavior.",
      recommendation: "Network monitoring tools like SolarWinds or Splunk can help detect intrusions early."
    }
  },
  {
    question: "Is HTTPS important for my business website?",
    answer: {
      text: "Yes, HTTPS encrypts the connection between your website and visitors, protecting sensitive information.",
      advice: "Ensure your website has an SSL certificate to build trust with visitors and improve search engine rankings.",
      recommendation: "Services like Let's Encrypt offer free SSL certificates, or you can use products from DigiCert."
    }
  }
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CyberSecurity Assessment",
      "description": "Free cybersecurity self-assessment tool for small businesses. Get instant insights and actionable recommendations to protect your business from cyber threats.",
      "url": "https://cybersectest.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cybersectest.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToTools = () => {
    toolsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage 
        faqs={faqs} 
        expandedFAQ={expandedFAQ} 
        toggleFAQ={toggleFAQ} 
        showScrollIndicator={showScrollIndicator}
        scrollToTools={scrollToTools}
        toolsRef={toolsRef}
        onNavigate={(path) => navigate(path)}
      />} />
      <Route path="/simple-assessment" element={<SimpleQuiz onBack={() => navigate('/')} />} />
      <Route path="/advanced-assessment" element={<AdvancedQuiz onBack={() => navigate('/')} />} />
      <Route path="/advisor" element={<SecurityAdvisor onBack={() => navigate('/')} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy onBack={() => navigate('/')} />} />
      <Route path="/terms" element={<TermsOfService onBack={() => navigate('/')} />} />
    </Routes>
  );
}

export default App;