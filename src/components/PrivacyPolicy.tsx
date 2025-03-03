import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-8">Last Updated: 20/02/2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to Cyber Sec Test. We are dedicated to providing cybersecurity assistance to small businesses through our interactive quiz and AI chat services. This Privacy Policy explains how we handle any information you provide while using our services and details the steps we take to protect your privacy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information Collection and Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Quiz and AI Chat Interactions:</h3>
                  <p className="text-gray-600">
                    Our website offers a quiz to help assess your cybersecurity posture and an AI chat service for cybersecurity-related inquiries. Please note that any responses you provide in the quiz or any comments and questions you input into the AI chat are processed solely for the purpose of generating immediate recommendations or answers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Storage of User Data:</h3>
                  <p className="text-gray-600">
                    We do not store any of your responses or interaction data. Once a session is completed, all input is permanently cleared and cannot be retrieved. This means that any answers, recommendations, or comments generated during your session are not recorded or saved in our system.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Collection of Personally Identifiable Information (PII):</h3>
                  <p className="text-gray-600">
                    Our services are designed to operate without the need for collecting personal data. We strongly advise users to refrain from entering any personally identifiable information (PII), such as names, addresses, phone numbers, email addresses, passwords, or any other sensitive data regarding yourself or your business. Entering such information is strictly discouraged.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-600">
                Although our system does not store your quiz responses or chat inputs, we take every precaution to ensure that any data processed in real-time is handled securely. Our website utilizes industry-standard security measures to protect the information during transmission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Avoidance of PII:</h3>
                  <p className="text-gray-600">
                    To further protect your privacy and that of your business, please do not provide any PII when using our website. This includes, but is not limited to, your name, physical address, phone number, email address, and any other identifying information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Awareness of Data Practices:</h3>
                  <p className="text-gray-600">
                    By using our website, you acknowledge and accept that all interactions (including quiz responses and AI chat inputs) are ephemeral and will not be stored or retrievable after the session ends.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Links and Services</h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Return to our main site to explore more resources</p>
              <div className="flex justify-center space-x-4">
                <a href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
                <a href="/simple-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Simple Assessment</a>
                <a href="/advanced-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Advanced Assessment</a>
                <a href="/advisor" className="text-blue-600 hover:text-blue-800 hover:underline">Advisor</a>
                <a href="/freesecuritytools" className="text-blue-600 hover:text-blue-800 hover:underline">Free Tools</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}