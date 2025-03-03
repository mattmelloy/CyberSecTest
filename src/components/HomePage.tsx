import React, { RefObject } from 'react';
import { Shield, FileCheck2, MessageSquareText, ChevronDown, AlertCircle, CheckCircle2, ArrowRight, Users, Zap, AlertOctagon, DollarSign, Target, ChevronRight, ExternalLink, PenTool as Tool } from 'lucide-react';

interface FAQ {
  question: string;
  answer: {
    text: string;
    advice: string;
    recommendation: string;
  };
}

interface HomePageProps {
  faqs: FAQ[];
  expandedFAQ: number | null;
  toggleFAQ: (index: number) => void;
  showScrollIndicator: boolean;
  scrollToTools: () => void;
  toolsRef: RefObject<HTMLDivElement>;
  onNavigate: (path: string) => void;
}

export default function HomePage({ 
  faqs, 
  expandedFAQ, 
  toggleFAQ, 
  showScrollIndicator, 
  scrollToTools, 
  toolsRef,
  onNavigate
}: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop" 
            alt="Data center with blue lighting" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Small Businesses Cyber Security Assessment
              <span className="text-blue-200"><br></br>Easy and Free</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Protect your business from hackers and cyber attacks with free and easy to understand IT security advice.
            </p>
            <div className="mt-8 flex flex-col items-center space-y-4">
              <a 
                href="/simple-assessment"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Free Assessment
              </a>
              <p className="text-sm text-gray-200 font-bold">
                It's time to understand your business risks and how you can prevent being hacked!
              </p>
            </div>
          </div>
        </div>
        {/* Scroll Indicator with accessibility improvements */}
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

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Growing Cyber Threat Landscape</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 mx-auto">
                <AlertOctagon className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 text-center mb-2">87,400</div>
              <p className="text-gray-600 text-center">
                Reported cybersecurity incidents in Australia during FY24
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 text-center mb-2">$49,600</div>
              <p className="text-gray-600 text-center">
                Average loss per cybersecurity incident for small businesses
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 text-center mb-2">84%</div>
              <p className="text-gray-600 text-center">
                Of cyber incidents were caused by phishing attacks
              </p>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-gray-500">
            Source: <a href="https://www.cyber.gov.au/about-us/view-all-content/reports-and-statistics/annual-cyber-threat-report-2023-2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Australian Cyber Security Centre Annual Cyber Threat Report 2023-2024</a>
          </div>
        </div>
      </section>

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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
              <a
                href="/simple-assessment"
                className="w-full block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Start Assessment
              </a>
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
              <a
                href="/advanced-assessment"
                className="w-full block text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Start Assessment
              </a>
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
                Do you have more questions? Get clear, reliable answers to your security questions quickly.
              </p>
              <a
                href="/advisor"
                className="w-full block text-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Start Chatting
              </a>
            </div>
          </div>
          
          {/* Free Tools Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Tool className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Security Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Discover free online tools to help protect your business from cyber threats and improve your security posture.
              </p>
              <a
                href="/freesecuritytools"
                className="w-full block text-center bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors duration-300"
              >
                View Free Tools
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Cybersecurity Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-200 transition-colors duration-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        expandedFAQ === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                      <p className="text-gray-700 mb-3">{faq.answer.text}</p>
                      <div className="bg-blue-50 p-3 rounded-lg mb-3">
                        <p className="text-gray-700">
                          <span className="font-medium text-blue-700">Best Practice: </span>
                          {faq.answer.advice}
                        </p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-medium text-green-700">Recommended Tools: </span>
                          {faq.answer.recommendation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

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
                <a
                  href="/simple-assessment"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  Start Assessment Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
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
          <a
            href="/simple-assessment"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Start Your Free Assessment Now
            <ArrowRight className="w-6 h-6 ml-2" />
          </a>
        </section>

        {/* About Section */}
        <section className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600">
            This page has been designed and built by IT professionals as a service to assist
            small businesses with improving cybersecurity. This is our passion, and this tool
            has been designed to help people minimize the risk of cybersecurity compromise.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              We believe that every small business deserves access to quality cybersecurity guidance, 
              regardless of their budget or technical expertise. Our mission is to demystify cybersecurity 
              and provide practical, actionable advice that can be implemented by businesses of all sizes.
            </p>
            <p className="text-gray-600">
              Through our free assessment tools and educational resources, we aim to raise awareness about 
              cyber threats and empower business owners to take proactive steps to protect their valuable data, 
              customer information, and business operations from increasingly sophisticated cyber attacks.
            </p>
          </div>
        </section>

        {/* Site Map Section */}
        <section className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Site Map</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Main Pages</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
                </li>
                <li>
                  <a href="/simple-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Simple Security Assessment</a>
                </li>
                <li>
                  <a href="/advanced-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">NIST 800-53 Assessment</a>
                </li>
                <li>
                  <a href="/advisor" className="text-blue-600 hover:text-blue-800 hover:underline">Cybersecurity Advisor</a>
                </li>
                <li>
                  <a href="/freesecuritytools" className="text-blue-600 hover:text-blue-800 hover:underline">Free Security Tools</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.cyber.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    Australian Cyber Security Centre <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.cisa.gov/small-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                    CISA Small Business Resources <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p>© 2025 Cybersecurity Assessment Tool. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
              <a href="/simple-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Simple Assessment</a>
              <a href="/advanced-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Advanced Assessment</a>
              <a href="/advisor" className="text-blue-600 hover:text-blue-800 hover:underline">Advisor</a>
              <a href="/freesecuritytools" className="text-blue-600 hover:text-blue-800 hover:underline">Free Tools</a>
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}