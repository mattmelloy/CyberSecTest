import React, { useState, useEffect, useRef } from 'react';
import { Shield, FileCheck2, MessageSquareText, ChevronDown, AlertCircle, CheckCircle2, ArrowRight, LockKeyhole, Users, Zap } from 'lucide-react';
import SimpleQuiz from './components/SimpleQuiz';
import AdvancedQuiz from './components/AdvancedQuiz';
import SecurityAdvisor from './components/SecurityAdvisor';
import AdUnit from './components/AdUnit';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type Page = 'home' | 'simple-assessment' | 'advanced-assessment' | 'advisor' | 'privacy-policy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
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

  const scrollToTools = () => {
    toolsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (currentPage === 'simple-assessment') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="bg-white shadow-sm mb-8">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              ← Back to Home
            </button>
          </div>
        </header>
        <div className="flex">
          {/* Left sidebar ad */}
          <div className="hidden lg:block w-[160px] min-h-screen">
            <div className="sticky top-4">
              <AdUnit slot="assessment-left-sidebar" className="w-[160px] h-[600px]" />
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <SimpleQuiz />
          </div>
          
          {/* Right sidebar ad */}
          <div className="hidden lg:block w-[160px] min-h-screen">
            <div className="sticky top-4">
              <AdUnit slot="assessment-right-sidebar" className="w-[160px] h-[600px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'advanced-assessment') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="bg-white shadow-sm mb-8">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              ← Back to Home
            </button>
          </div>
        </header>
        <div className="flex">
          {/* Left sidebar ad */}
          <div className="hidden lg:block w-[160px] min-h-screen">
            <div className="sticky top-4">
              <AdUnit slot="advanced-assessment-left-sidebar" className="w-[160px] h-[600px]" />
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <AdvancedQuiz />
          </div>
          
          {/* Right sidebar ad */}
          <div className="hidden lg:block w-[160px] min-h-screen">
            <div className="sticky top-4">
              <AdUnit slot="advanced-assessment-right-sidebar" className="w-[160px] h-[600px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'advisor') {
    return <SecurityAdvisor onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop" 
            alt="Data center with blue lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Assess Your Cybersecurity
              <span className="text-blue-200"> Posture in 5 Minutes and Free</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering small businesses with fast, actionable insights—no personal data stored, ever.
            </p>
            <div className="mt-8 flex flex-col items-center space-y-4">
              <button
                onClick={() => setCurrentPage('simple-assessment')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Free Assessment
              </button>
              <p className="text-sm text-gray-200 font-bold">
                It's time to understand your business risks and how you can prevent being hacked!
              </p>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <button
          onClick={scrollToTools}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
            showScrollIndicator ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="animate-bounce bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </button>
      </header>

      {/* Ad Section below hero */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdUnit slot="hero-bottom" className="w-full h-[90px]" />
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* How It Works Section */}
        <section ref={toolsRef} className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Three Simple Steps to Better Cybersecurity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete the Assessment</h3>
                <p className="text-gray-600">
                  Answer 10 straightforward questions about your current security practices.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Instant Insights</h3>
                <p className="text-gray-600">
                  Receive personalized recommendations to strengthen your defenses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquareText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Expert Guidance</h3>
                <p className="text-gray-600">
                  Receive clear, reliable answers to your security questions from our dedicated advisor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Simple Assessment Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Simple Security Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                A 5 minute 10-question assessment to evaluate your basic cybersecurity practices.
              </p>
              <button
                onClick={() => setCurrentPage('simple-assessment')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Start Assessment
              </button>
            </div>
          </div>

          {/* Advanced Assessment Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                NIST 800-53 Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed assessment based on NIST 800-53 framework for IT professionals.
              </p>
              <button
                onClick={() => setCurrentPage('advanced-assessment')}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Start Assessment
              </button>
            </div>
          </div>

          {/* Security Advisor Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquareText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cybersecurity Advisor
              </h3>
              <p className="text-gray-600 mb-4">
                Your dedicated resource for instant cybersecurity guidance. Get clear, reliable answers to your security questions quickly.
              </p>
              <button
                onClick={() => setCurrentPage('advisor')}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Start Chatting Now
              </button>
            </div>
          </div>
        </div>

        {/* The Challenge Section */}
        <section className="mt-24 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Are You Worried About Cyber Threats?</h2>
                <p className="text-gray-700 leading-relaxed">
                  In today's digital landscape, small businesses face growing risks from cyber attacks. Without dedicated security teams, many struggle to identify vulnerabilities and know how to protect their valuable data. We understand these challenges and are here to help you take control of your cybersecurity—quickly and securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cybersecurity Ally for Small Businesses</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We offer a simple, intuitive self-assessment that evaluates your current security posture and provides tailored recommendations. We can instantly answer your questions on cybersecurity, ensuring you have the guidance you need—when you need it.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Instant, actionable insights',
                    'No personal data is stored or retrieved',
                    'Tailored recommendations for your business',
                    'Easy-to-use tools designed for non-experts'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage('simple-assessment')}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  Start Assessment Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Security Promise Section */}
        <section className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <LockKeyhole className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Your Privacy Is Our Top Priority</h2>
                  <span className="px-4 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Privacy-First | Ephemeral Data
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We believe in protecting your privacy. We do not store any responses from our assessment or security advisor. Once your session ends, all data is permanently cleared. To ensure your security, please refrain from entering any personally identifiable information (names, addresses, phone numbers, passwords, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Small Business Owners Worldwide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 italic mb-4">
                      "The security assessment gave me a clear roadmap for enhancing our cybersecurity. The process was simple, and the insights were invaluable."
                    </p>
                    <p className="text-gray-900 font-medium">— Alex M., Retail Business Owner</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 italic mb-4">
                      "I appreciated that no sensitive data was stored. The recommendations were spot-on and easy to implement with assistance from by IT provider."
                    </p>
                    <p className="text-gray-900 font-medium">— Jamie L., Medical Practice Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Strengthen Your Cybersecurity?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take control of your business's security with our free, no-risk assessment.
          </p>
          <button
            onClick={() => setCurrentPage('simple-assessment')}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Start Your Free Assessment Now
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
        </section>

        {/* About Section */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600">
            This page has been designed and built by IT professionals as a service to assist
            small businesses with improving cybersecurity. This is our passion, and this tool
            has been designed to help people minimize the risk of cybersecurity compromise.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p>© 2025 Cybersecurity Assessment Tool. All rights reserved.</p>
            <div className="mt-2">
              <button
                onClick={() => setCurrentPage('privacy-policy')}
                className="text-blue-600 hover:text-blue-800 mx-2"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setCurrentPage('terms')}
                className="text-blue-600 hover:text-blue-800 mx-2"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;