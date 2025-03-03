import React from 'react';
import { ArrowLeft, ExternalLink, Shield, AlertTriangle, Lock, Search, UserCheck, Key, Mail } from 'lucide-react';

interface FreeToolsProps {
  onBack: () => void;
}

export default function FreeTools({ onBack }: FreeToolsProps) {
  const tools = [
    {
      title: "Free Online Cybersecurity Training",
      description: "Protect your business from cyber threats with our cybersecurity training. Equip your team to prevent phishing attacks, secure sensitive data, and comply with industry regulations—ensuring your business stays safe and resilient.",
      link: "https://cyber101.com",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      title: "Phishing Quiz",
      description: "Test your ability to spot phishing scams with Google's Phishing Quiz. Learn how to identify fake emails, protect your business from cyberattacks, and keep sensitive data safe.",
      link: "https://phishingquiz.withgoogle.com",
      icon: <Mail className="w-6 h-6 text-red-600" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      title: "Link Safety Checker",
      description: "Instantly verify if a link is secure, avoid phishing scams, and protect your personal or business data from malicious websites. Ensure every click is safe and trustworthy.",
      link: "https://www.bitdefender.com/en-au/consumer/link-checker",
      icon: <Search className="w-6 h-6 text-green-600" />,
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      title: "Website Security Checker",
      description: "Ensure your website is secure with the SSL Labs SSL Checker. This free tool analyzes your SSL/TLS configuration, identifies vulnerabilities, and provides actionable steps to protect your site.",
      link: "https://www.ssllabs.com/ssltest/",
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      title: "Data Breach Checker",
      description: "Has your login details been stolen? Check now with \"Have I Been Pwned\" to see if your email or passwords have been compromised in a data breach. Stay one step ahead of hackers.",
      link: "https://haveibeenpwned.com",
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      title: "Password Strength Checker",
      description: "Is your password strong enough? Use this free password checker to test its complexity and see if it's been exposed in past security breaches. Strengthen your accounts and stay protected.",
      link: "https://nordpass.com/secure-password/",
      icon: <Key className="w-6 h-6 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      title: "Phishing Simulation Tool",
      description: "Protect your business from phishing attacks with a free phishing simulation test. Train your team to recognize and avoid fake emails, reduce the risk of data breaches, and strengthen your security.",
      link: "https://getgophish.com",
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Free Cybersecurity Tools</h1>
          
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700">
              Running a small business doesn't mean compromising on cybersecurity. While you may not have the budget of larger companies, there are still excellent free online tools available to help you protect your business. This page provides a curated list of resources to assess risks, train your team, and strengthen your defences—all at no cost. Start securing your business today!
            </p>
          </div>

          {/* Tools with alternating layout */}
          <div className="space-y-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className={`flex flex-col sm:flex-row ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="sm:w-1/4 flex-shrink-0">
                    <img 
                      src={tool.image} 
                      alt={tool.title} 
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:w-3/4">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-full bg-gray-100 mr-3 flex-shrink-0">
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      Visit Tool <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need More Personalized Help?</h2>
            <p className="text-gray-700 mb-6">
              While these free tools are a great starting point, every business has unique security needs. Our Cybersecurity Advisor can provide tailored guidance specific to your situation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/advisor" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Chat with Advisor
              </a>
              <a 
                href="/simple-assessment" 
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
              >
                Take Security Assessment
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Return to our main site to explore more resources</p>
            <div className="flex justify-center space-x-4">
              <a href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
              <a href="/simple-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Simple Assessment</a>
              <a href="/advanced-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Advanced Assessment</a>
              <a href="/advisor" className="text-blue-600 hover:text-blue-800 hover:underline">Advisor</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}