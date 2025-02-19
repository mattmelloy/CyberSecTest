import React from 'react';
import { ArrowLeft, Construction } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  onBack: () => void;
}

export default function ComingSoon({ title, onBack }: ComingSoonProps) {
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-blue-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {title} Coming Soon
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to bring you an even more comprehensive security assessment experience.
            This feature will be available soon!
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              What to Expect
            </h2>
            {title === 'Advanced Security Quiz' ? (
              <ul className="text-left text-blue-800 space-y-3">
                <li>• In-depth assessment based on NIST Cybersecurity Framework</li>
                <li>• Detailed scoring across multiple security domains</li>
                <li>• Customized recommendations for your industry</li>
                <li>• Comprehensive security improvement roadmap</li>
              </ul>
            ) : (
              <ul className="text-left text-blue-800 space-y-3">
                <li>• Real-time AI-powered security guidance</li>
                <li>• Instant answers to your cybersecurity questions</li>
                <li>• Personalized security recommendations</li>
                <li>• Up-to-date threat intelligence insights</li>
              </ul>
            )}
          </div>
          
          <div className="mt-8">
            <button
              onClick={onBack}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}