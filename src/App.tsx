import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Shield, FileCheck2, MessageSquareText, ChevronDown, AlertCircle, CheckCircle2, ArrowRight, Users, Zap, AlertOctagon, DollarSign, Target, ChevronRight } from 'lucide-react';
import SimpleQuiz from './components/SimpleQuiz';
import AdvancedQuiz from './components/AdvancedQuiz';
import SecurityAdvisor from './components/SecurityAdvisor';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HomePage from './components/HomePage';
import FreeTools from './components/FreeTools';

interface FAQ {
  question: string;
  answer: {
    text: string;
    advice: string;
    recommendation: string;
  };
}

const faqs: FAQ[] = [
  // ... (existing FAQ data)
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

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    return () => {
      // Cleanup not needed as script tag will be managed by the component
    };
  }, [location]);

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
      <Route path="/freesecuritytools" element={<FreeTools onBack={() => navigate('/')} />} />
    </Routes>
  );
}

export default App;