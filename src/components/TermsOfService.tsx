import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-8">Last Updated: 20/02/2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using the Cyber Sec Test website ("Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, please do not use our Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600">
                Cyber Sec Test provides cybersecurity assistance to small businesses through interactive tools, including a security posture quiz and an AI-driven chat service. These tools are designed to help business owners and IT professionals assess their cybersecurity practices and receive recommendations for improvements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of the Website</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">User Conduct:</h3>
                  <p className="text-gray-600">
                    You agree to use the Website for lawful purposes only and in a manner that does not infringe on the rights of, or restrict, or inhibit the use and enjoyment of the Website by any third party.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Prohibited Information:</h3>
                  <p className="text-gray-600">
                    For your protection, you are strongly advised not to submit any personally identifiable information (PII) (e.g., names, addresses, phone numbers, passwords) regarding yourself or your business through our quiz or AI chat services.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. General Disclaimer and Limitation of Liability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">General Information:</h3>
                  <p className="text-gray-600">
                    The content, recommendations, and responses provided on Cyber Sec Test are of a general nature and are intended to assist a broad range of businesses. You are solely responsible for determining whether the information provided is appropriate for your specific business or situation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Liability:</h3>
                  <p className="text-gray-600">
                    Cyber Sec Test does not store any user inputs, and all quiz responses and AI chat interactions are ephemeral and cannot be retrieved after your session ends. We do not accept any liability for any actions taken based on the information provided on this Website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Professional Advice:</h3>
                  <p className="text-gray-600">
                    The recommendations and advice provided should not be considered as a substitute for professional consultation. Ensure that you fully understand any advice before acting on it. If you are unsure or require specialized guidance, please consult a qualified IT or cybersecurity professional.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on this Website, including but not limited to text, graphics, logos, and software, is the property of Cyber Sec Test or its licensors and is protected by intellectual property laws. No content from the Website may be copied, reproduced, or distributed without prior written permission from Cyber Sec Test.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modifications to the Terms of Service</h2>
              <p className="text-gray-600">
                Cyber Sec Test reserves the right to modify or update these Terms at any time without prior notice. Your continued use of the Website following any changes signifies your acceptance of the revised Terms. It is your responsibility to review these Terms periodically for any updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law and Jurisdiction</h2>
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of Australia. Any disputes arising from or related to your use of the Website will be subject to the exclusive jurisdiction of the courts located within Australia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-600">
                Cyber Sec Test reserves the right to terminate or suspend your access to the Website at any time, without notice, for conduct that Cyber Sec Test believes violates these Terms or is harmful to other users or the Website.
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