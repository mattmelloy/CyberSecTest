import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, AlertTriangle, Shield, User, MessageSquareText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { initializeGemini, generateResponse } from '../utils/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface SecurityAdvisorProps {
  onBack: () => void;
}

export default function SecurityAdvisor({ onBack }: SecurityAdvisorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiInitialized, setApiInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      initializeGemini();
      setApiInitialized(true);
    } catch (error) {
      console.error('Failed to initialize security advisor:', error);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !apiInitialized) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I encountered an error. Please try again."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageSquareText className="w-8 h-8 text-purple-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Cybersecurity Advisor</h1>
                <p className="mt-1 text-sm text-gray-600">
                  Get expert guidance on implementing security best practices
                </p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-800 flex items-center"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left sidebar ad */}
        <div className="hidden lg:block w-[160px]">
          <div className="sticky top-4 pt-4">
            {/* <AdUnit slot="advisor-left-sidebar" className="w-[160px] h-[600px]" /> */}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 max-w-4xl mx-auto px-4 py-6">
          {/* Warning banner */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Please do not share any sensitive or personally identifiable information about you or your business in this conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Conversation area */}
          <div className="bg-white rounded-lg shadow-lg mb-4">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Cybersecurity Advisor
              </h2>
              <p className="text-sm text-gray-600">
                Get expert guidance on cybersecurity best practices and implementation
              </p>
            </div>

            <div className="h-[calc(100vh-380px)] overflow-y-auto p-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <p className="text-lg font-medium mb-2">
                    How can I help secure your business today?
                  </p>
                  <p className="text-sm">
                    Ask about security best practices, threat prevention, or specific security concerns
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === 'user'
                              ? 'bg-blue-100'
                              : 'bg-purple-100'
                          }`}
                        >
                          {message.role === 'user' ? (
                            <User className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Shield className="w-5 h-5 text-purple-600" />
                          )}
                        </div>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.role === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <ReactMarkdown className="prose max-w-none dark:prose-invert">
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg px-4 py-2">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input form */}
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleSubmit} className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask your cybersecurity question..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading || !apiInitialized}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || !apiInitialized}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    !input.trim() || isLoading || !apiInitialized
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700'
                  } text-white transition-colors duration-200`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-4">Return to our main site to explore more resources</p>
            <div className="flex justify-center space-x-4">
              <a href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
              <a href="/simple-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Simple Assessment</a>
              <a href="/advanced-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Advanced Assessment</a>
              <a href="/freesecuritytools" className="text-blue-600 hover:text-blue-800 hover:underline">Free Tools</a>
            </div>
          </div>
        </div>

        {/* Right sidebar ad */}
        <div className="hidden lg:block w-[160px]">
          <div className="sticky top-4 pt-4">
            {/* <AdUnit slot="advisor-right-sidebar" className="w-[160px] h-[600px]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}