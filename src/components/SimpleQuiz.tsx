import React, { useState } from 'react';
import { QuizQuestion, Answer, QuizResult } from '../types';
import { assessmentQuestions } from '../data/simpleQuiz';
import { ArrowLeft, ArrowRight, Download, AlertCircle, MessageSquareText, Shield } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { PieChart, Pie, Cell } from 'recharts';

export default function SimpleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(assessmentQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (answers.every(a => a !== -1)) {
      calculateResults(answers);
    }
  };

  const calculateResults = (finalAnswers: number[]) => {
    let totalScore = 0;
    let maxScore = 0;
    const recommendations: Array<{
      questionNumber: number;
      question: string;
      userAnswer: string;
      feedback: string;
    }> = [];

    assessmentQuestions.forEach((question, index) => {
      const answerIndex = finalAnswers[index];
      if (answerIndex !== -1) {
        const answer = question.answers[answerIndex];
        totalScore += answer.points;
        maxScore += Math.max(...question.answers.map(a => a.points));
        if (answer.points < question.answers[0].points) {
          recommendations.push({
            questionNumber: index + 1,
            question: question.question,
            userAnswer: answer.text,
            feedback: answer.feedback
          });
        }
      }
    });

    setResult({
      score: totalScore,
      maxScore: maxScore,
      recommendations
    });
    setShowResults(true);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleDownloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 45;
    const lineHeight = 6;

    doc.setFillColor(25, 93, 194);
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text('Cybersecurity Assessment', pageWidth / 2, 28, { align: 'center' });

    doc.setTextColor(25, 93, 194);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    const websiteUrl = 'https://cybersectest.com';
    doc.textWithLink(websiteUrl, pageWidth / 2, yPosition, {
      url: websiteUrl,
      align: 'center'
    });
    yPosition += lineHeight * 3;

    doc.setTextColor(51, 51, 51);
    doc.setFontSize(16);
    doc.text('Thank you for completing our online', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 1.5;
    doc.setFont('helvetica', 'bold');
    doc.text('Cybersecurity Self-Assessment', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 3;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    doc.text(`Assessment Date: ${currentDate}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 1.5;
    doc.text(`Assessment Time: ${currentTime}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 4;

    const scorePercentage = Math.round((result.score / result.maxScore) * 100);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Overall Security Score', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 3;

    doc.setFontSize(48);
    doc.setTextColor(25, 93, 194);
    doc.text(`${scorePercentage}%`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 3;

    let riskColor = [255, 59, 48];
    let riskLevel = 'High Risk';
    if (scorePercentage >= 80) {
      riskColor = [52, 199, 89];
      riskLevel = 'Low Risk';
    } else if (scorePercentage >= 60) {
      riskColor = [255, 149, 0];
      riskLevel = 'Moderate Risk';
    }

    doc.setTextColor(riskColor[0], riskColor[1], riskColor[2]);
    doc.setFontSize(28);
    doc.text(`Risk Level: ${riskLevel}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 4;

    doc.setTextColor(51, 51, 51);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Have questions about your results?', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 1.5;
    doc.text('Our Cybersecurity Advisor is here to help.', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 2;

    doc.setTextColor(25, 93, 194);
    doc.setFont('helvetica', 'bold');
    const advisorUrl = 'https://cybersectest.com/advisor';
    doc.textWithLink('Click here to chat with our Cybersecurity Advisor', pageWidth / 2, yPosition, {
      url: advisorUrl,
      align: 'center'
    });
    yPosition += lineHeight * 2;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(102, 102, 102);
    doc.setFontSize(12);
    doc.text(`(${advisorUrl})`, pageWidth / 2, yPosition, { align: 'center' });

    doc.addPage();
    yPosition = 40;

    doc.setFillColor(25, 93, 194);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Detailed Assessment', pageWidth / 2, 28, { align: 'center' });

    result.recommendations.forEach((recommendation) => {
      if (yPosition > doc.internal.pageSize.getHeight() - 60) {
        doc.addPage();
        yPosition = margin;
      }

      doc.setFillColor(240, 247, 255);
      doc.rect(margin - 5, yPosition - 5, pageWidth - (margin * 2) + 10, 40, 'F');
      
      doc.setTextColor(25, 93, 194);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(`Question ${recommendation.questionNumber}:`, margin, yPosition);
      yPosition += lineHeight * 1.5;

      doc.setTextColor(51, 51, 51);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      const questionLines = doc.splitTextToSize(recommendation.question, pageWidth - (margin * 2));
      questionLines.forEach((line: string) => {
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += lineHeight;

      const answerLines = doc.splitTextToSize(recommendation.userAnswer, pageWidth - (margin * 2) - 10);
      const answerHeight = (answerLines.length * lineHeight) + 15;

      doc.setFillColor(245, 245, 245);
      doc.rect(margin - 5, yPosition - 5, pageWidth - (margin * 2) + 10, answerHeight, 'F');
      
      doc.setTextColor(102, 102, 102);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Your answer:', margin, yPosition);
      yPosition += lineHeight;

      doc.setTextColor(51, 51, 51);
      doc.setFont('helvetica', 'normal');
      answerLines.forEach((line: string) => {
        doc.text(line, margin + 5, yPosition);
        yPosition += lineHeight;
      });
      yPosition += lineHeight;

      const feedbackLines = doc.splitTextToSize(recommendation.feedback, pageWidth - (margin * 2) - 10);
      const feedbackHeight = (feedbackLines.length * lineHeight) + 15;

      doc.setFillColor(255, 243, 242);
      doc.rect(margin - 5, yPosition - 5, pageWidth - (margin * 2) + 10, feedbackHeight, 'F');
      
      doc.setTextColor(220, 53, 69);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Recommendation:', margin, yPosition);
      yPosition += lineHeight;

      doc.setTextColor(51, 51, 51);
      doc.setFont('helvetica', 'normal');
      feedbackLines.forEach((line: string) => {
        doc.text(line, margin + 5, yPosition);
        yPosition += lineHeight;
      });
      
      yPosition += lineHeight * 3;
    });

    const footerPosition = doc.internal.pageSize.getHeight() - 20;
    doc.setFillColor(240, 247, 255);
    doc.rect(0, footerPosition - 10, pageWidth, 30, 'F');
    
    doc.setFontSize(10);
    doc.setTextColor(25, 93, 194);
    doc.setFont('helvetica', 'bold');
    doc.textWithLink(websiteUrl, pageWidth / 2, footerPosition, {
      url: websiteUrl,
      align: 'center'
    });

    doc.save('cybersecurity-assessment.pdf');
  };

  if (showResults && result) {
    const scorePercentage = Math.round((result.score / result.maxScore) * 100);
    const pieData = [
      { name: 'Score', value: scorePercentage },
      { name: 'Remaining', value: 100 - scorePercentage }
    ];

    let scoreColor = '#DC3545';
    if (scorePercentage >= 80) {
      scoreColor = '#28A745';
    } else if (scorePercentage >= 60) {
      scoreColor = '#FFC107';
    }
    
    const COLORS = [scoreColor, '#E8E8E8'];

    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <button
              onClick={handleDownloadPDF}
              className="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Detailed Assessment Report (PDF)
            </button>
          </div>

          <div className="mb-8 flex items-center justify-between bg-gray-50 p-6 rounded-lg">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Assessment Score</h2>
              <div className="text-4xl font-bold" style={{ color: scoreColor }}>{scorePercentage}%</div>
              <div className="text-sm text-gray-500 mt-1">
                {scorePercentage >= 80 ? 'Low Risk' : scorePercentage >= 60 ? 'Moderate Risk' : 'High Risk'}
              </div>
            </div>
            <div className="w-40 h-40">
              <PieChart width={160} height={160}>
                <Pie
                  data={pieData}
                  cx={80}
                  cy={80}
                  innerRadius={55}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>

          <div className="mb-8 bg-blue-50 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <MessageSquareText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Have questions about your results?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our Cybersecurity Advisor is here to help you understand your assessment and provide guidance on implementing improvements.
                </p>
                <a
                  href="/advisor"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Chat with Advisor
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas for Improvement:</h3>
            <div className="space-y-6">
              {result.recommendations.map((rec, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-blue-600">Question {rec.questionNumber}</span>
                    <h4 className="text-lg font-medium text-gray-900 mt-1">{rec.question}</h4>
                  </div>
                  <div className="mb-4 bg-white p-3 rounded border border-gray-100">
                    <span className="text-sm font-medium text-gray-500">Your Answer:</span>
                    <p className="text-gray-700 mt-1">{rec.userAnswer}</p>
                  </div>
                  <div className="flex items-start bg-red-50 p-4 rounded">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{rec.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = assessmentQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Cybersecurity Self-Assessment</h1>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Answer a few questions to evaluate your organization's security posture and get personalized recommendations.
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {assessmentQuestions.length}
              </h2>
              <span className="text-sm font-medium text-gray-600">
                {question.category}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>

          <div className="space-y-4">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border ${
                  currentAnswer === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                } transition-colors duration-300`}
              >
                {answer.text}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <div className="text-gray-600">
              {currentQuestion + 1} / {assessmentQuestions.length}
            </div>
            {currentQuestion === assessmentQuestions.length - 1 && answers.every(a => a !== -1) ? (
              <button
                onClick={() => calculateResults(answers)}
                className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                <span className="mr-2">Show Results</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentAnswer === -1}
                className={`flex items-center ${
                  currentAnswer === -1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}