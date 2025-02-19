import React, { useState } from 'react';
import { Shield, FileCheck2, MessageSquareText } from 'lucide-react';
import SimpleQuiz from './components/SimpleQuiz';
import ComingSoon from './components/ComingSoon';
import AIChat from './components/AIChat';
import AdUnit from './components/AdUnit';

function App() {
  const [currentTool, setCurrentTool] = useState<'home' | 'simple-quiz' | 'advanced-quiz' | 'chat'>('home');

  if (currentTool === 'simple-quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="bg-white shadow-sm mb-8">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setCurrentTool('home')}
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
              <AdUnit slot="quiz-left-sidebar" className="w-[160px] h-[600px]" />
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <SimpleQuiz />
          </div>
          
          {/* Right sidebar ad */}
          <div className="hidden lg:block w-[160px] min-h-screen">
            <div className="sticky top-4">
              <AdUnit slot="quiz-right-sidebar" className="w-[160px] h-[600px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentTool === 'advanced-quiz') {
    return <ComingSoon title="Advanced Security Quiz" onBack={() => setCurrentTool('home')} />;
  }

  if (currentTool === 'chat') {
    return <AIChat onBack={() => setCurrentTool('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative h-[600px] w-full overflow-hidden">
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
              Protect Your Business from
              <span className="text-blue-200"> Cyber Threats</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Free tools to assess your cybersecurity posture and get actionable recommendations
              to protect your business.
            </p>
          </div>
        </div>
      </header>

      {/* Ad Section below hero */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdUnit slot="hero-bottom" className="w-full h-[90px]" />
      </div>

      {/* Tools Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Simple Quiz Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Simple Security Quiz
              </h3>
              <p className="text-gray-600 mb-4">
                A quick 10-question assessment to evaluate your basic cybersecurity practices.
              </p>
              <button
                onClick={() => setCurrentTool('simple-quiz')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Start Quiz
              </button>
            </div>
          </div>

          {/* Advanced Quiz Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Security Quiz
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed assessment based on NIST framework for IT professionals.
              </p>
              <button
                onClick={() => setCurrentTool('advanced-quiz')}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Start Quiz
              </button>
            </div>
          </div>

          {/* AI Chat Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquareText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Security Chat
              </h3>
              <p className="text-gray-600 mb-4">
                Get real-time answers to your cybersecurity questions from our AI assistant.
              </p>
              <button
                onClick={() => setCurrentTool('chat')}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>

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
              <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Privacy Policy</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Terms of Service</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 mx-2">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;