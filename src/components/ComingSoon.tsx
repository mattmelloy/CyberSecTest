import React from 'react';
import { ArrowLeft, Construction, Shield, FileCheck2 } from 'lucide-react';

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
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            {title === 'Advanced Security Quiz' ? (
              <Shield className="w-10 h-10 text-blue-600" />
            ) : (
              <FileCheck2 className="w-10 h-10 text-blue-600" />
            )}
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {title} Development Update
          </h1>
          
          {title === 'Advanced Security Quiz' ? (
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">About the Advanced Security Assessment</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our Advanced Security Quiz is being developed in collaboration with cybersecurity experts to provide a comprehensive evaluation of your organization's security posture. This assessment is based on the NIST Cybersecurity Framework and other industry-standard security controls.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Risk Assessment</h3>
                    <p className="text-blue-800">Detailed evaluation of security risks across multiple domains including network security, access control, and incident response.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Industry Benchmarking</h3>
                    <p className="text-blue-800">Compare your security practices against industry standards and peer organizations.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Custom Recommendations</h3>
                    <p className="text-blue-800">Receive tailored security recommendations based on your industry, size, and specific risk factors.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Compliance Mapping</h3>
                    <p className="text-blue-800">Map assessment results to common compliance frameworks like ISO 27001 and NIST CSF.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Current Progress</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2/5 text-gray-600">Question Development</div>
                    <div className="w-3/5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2/5 text-gray-600">Expert Review</div>
                    <div className="w-3/5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2/5 text-gray-600">Technical Implementation</div>
                    <div className="w-3/5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Get Started Now</h2>
                <p className="text-gray-600 mb-4">
                  While we complete the advanced assessment, start with our basic security quiz to get immediate insights into your current security posture.
                </p>
                <button
                  onClick={onBack}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  Take Basic Security Quiz
                </button>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">About the AI Security Assistant</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our AI-powered Security Assistant is being fine-tuned with the latest cybersecurity knowledge and best practices. This tool will provide real-time, contextual security guidance based on industry standards and emerging threats.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Planned Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Real-time Guidance</h3>
                    <p className="text-blue-800">Get instant answers to your security questions with contextual recommendations.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Best Practice Library</h3>
                    <p className="text-blue-800">Access a comprehensive database of security best practices and implementation guides.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Threat Intelligence</h3>
                    <p className="text-blue-800">Stay informed about the latest security threats and recommended mitigations.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Custom Policies</h3>
                    <p className="text-blue-800">Generate security policies and procedures tailored to your organization.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Development Status</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2/5 text-gray-600">AI Model Training</div>
                    <div className="w-3/5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2/5 text-gray-600">Knowledge Base</div>
                    <div className="w-3/5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2/5 text-gray-600">UI Implementation</div>
                    <div className="w-3/5">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Start Improving Your Security</h2>
                <p className="text-gray-600 mb-4">
                  While we complete the AI assistant, take our security assessment quiz to identify key areas for improvement in your organization's security posture.
                </p>
                <button
                  onClick={onBack}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  Take Security Quiz
                </button>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}