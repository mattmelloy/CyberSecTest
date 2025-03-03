import React, { useState } from 'react';
import { Shield, ArrowLeft, ArrowRight, Download, AlertCircle, MessageSquareText } from 'lucide-react';
import { ControlFamily, AdvancedQuizResult, AdvancedRecommendation } from '../types';
import { advancedQuiz } from '../data/advancedQuiz';
import { jsPDF } from 'jspdf';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface AdvancedQuizProps {
  onBack: () => void;
}

export default function AdvancedQuiz({ onBack }: AdvancedQuizProps) {
  const [currentFamily, setCurrentFamily] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AdvancedQuizResult | null>(null);

  const family = advancedQuiz.controlFamilies[currentFamily];
  const question = family?.questions[currentQuestion];
  const totalQuestions = advancedQuiz.controlFamilies.reduce(
    (sum, family) => sum + family.questions.length,
    0
  );

  const getCurrentQuestionNumber = () => {
    let questionNumber = 0;
    for (let i = 0; i < currentFamily; i++) {
      questionNumber += advancedQuiz.controlFamilies[i].questions.length;
    }
    return questionNumber + currentQuestion + 1;
  };

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers };
    if (!newAnswers[family.name]) {
      newAnswers[family.name] = [];
    }
    newAnswers[family.name][currentQuestion] = value;
    setAnswers(newAnswers);

    // Auto-advance to next question or family
    if (currentQuestion < family.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentFamily < advancedQuiz.controlFamilies.length - 1) {
      setCurrentFamily(currentFamily + 1);
      setCurrentQuestion(0);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentFamily > 0) {
      setCurrentFamily(currentFamily - 1);
      setCurrentQuestion(advancedQuiz.controlFamilies[currentFamily - 1].questions.length - 1);
    }
  };

  const calculateResults = () => {
    let overallScore = 0;
    let overallMaxScore = 0;
    const familyScores = advancedQuiz.controlFamilies.map(family => {
      const familyAnswers = answers[family.name] || [];
      const recommendations: AdvancedRecommendation[] = [];
      
      let familyScore = 0;
      let familyMaxScore = family.questions.length * 5; // Max score is 5 per question

      family.questions.forEach((question, index) => {
        const score = familyAnswers[index] || 0;
        familyScore += score;

        if (score < 4) { // Show recommendations for scores less than 4
          recommendations.push({
            question: question.text,
            selectedOption: question.options.find(opt => opt.value === score)?.text || 'No response',
            advice: question.advice,
            score: score,
            maxScore: 5
          });
        }
      });

      overallScore += familyScore;
      overallMaxScore += familyMaxScore;

      return {
        name: family.name,
        score: familyScore,
        maxScore: familyMaxScore,
        recommendations
      };
    });

    setResult({
      overallScore,
      familyScores
    });
    setShowResults(true);
  };

  const handleDownloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 45;
    const lineHeight = 7;

    // Header
    doc.setFillColor(25, 93, 194);
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('NIST 800-53 Security Assessment', pageWidth / 2, 28, { align: 'center' });

    // Date and Time
    doc.setTextColor(51, 51, 51);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    doc.text(`Assessment Date: ${currentDate}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 1.5;
    doc.text(`Assessment Time: ${currentTime}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 3;

    // Overall Score
    const scorePercentage = Math.round((result.overallScore / (result.familyScores.reduce((sum, f) => sum + f.maxScore, 0))) * 100);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Overall Security Maturity Score', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 3;

    doc.setFontSize(36);
    doc.setTextColor(25, 93, 194);
    doc.text(`${scorePercentage}%`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 3;

    let maturityLevel = 'Initial';
    let maturityColor = [220, 53, 69]; // Red
    if (scorePercentage >= 80) {
      maturityLevel = 'Optimized';
      maturityColor = [40, 167, 69]; // Green
    } else if (scorePercentage >= 60) {
      maturityLevel = 'Managed';
      maturityColor = [255, 193, 7]; // Yellow
    } else if (scorePercentage >= 40) {
      maturityLevel = 'Defined';
      maturityColor = [255, 149, 0]; // Orange
    }

    doc.setTextColor(maturityColor[0], maturityColor[1], maturityColor[2]);
    doc.setFontSize(24);
    doc.text(`Maturity Level: ${maturityLevel}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 4;

    // Control Family Scores
    doc.setTextColor(51, 51, 51);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Control Family Scores', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += lineHeight * 2;

    result.familyScores.forEach((familyScore) => {
      const score = Math.round((familyScore.score / familyScore.maxScore) * 100);
      
      if (yPosition > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        yPosition = margin;
      }

      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(`${familyScore.name}: ${score}%`, margin, yPosition);
      
      // Progress bar
      const barWidth = 100;
      const barHeight = 5;
      doc.setFillColor(230, 230, 230);
      doc.rect(margin + 150, yPosition - 4, barWidth, barHeight, 'F');
      doc.setFillColor(25, 93, 194);
      doc.rect(margin + 150, yPosition - 4, (score / 100) * barWidth, barHeight, 'F');
      
      yPosition += lineHeight * 2;
    });

    // Recommendations
    result.familyScores.forEach((familyScore) => {
      if (familyScore.recommendations.length > 0) {
        if (yPosition > doc.internal.pageSize.getHeight() - 60) {
          doc.addPage();
          yPosition = margin;
        }

        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(25, 93, 194);
        doc.text(`${familyScore.name} Recommendations`, margin, yPosition);
        yPosition += lineHeight * 2;

        familyScore.recommendations.forEach((rec) => {
          if (yPosition > doc.internal.pageSize.getHeight() - 60) {
            doc.addPage();
            yPosition = margin;
          }

          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(51, 51, 51);
          const questionLines = doc.splitTextToSize(rec.question, pageWidth - (margin * 2));
          questionLines.forEach((line: string) => {
            doc.text(line, margin, yPosition);
            yPosition += lineHeight;
          });

          doc.setFont('helvetica', 'normal');
          doc.setTextColor(102, 102, 102);
          doc.text(`Current Implementation: ${rec.selectedOption}`, margin, yPosition);
          yPosition += lineHeight * 1.5;

          doc.setTextColor(51, 51, 51);
          const adviceLines = doc.splitTextToSize(rec.advice, pageWidth - (margin * 2));
          adviceLines.forEach((line: string) => {
            doc.text(line, margin, yPosition);
            yPosition += lineHeight;
          });

          yPosition += lineHeight * 2;
        });
      }
    });

    // Add website URL to footer
    const websiteUrl = 'https://cybersectest.com';
    doc.setTextColor(25, 93, 194);
    doc.setFontSize(10);
    doc.textWithLink(websiteUrl, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, {
      url: websiteUrl,
      align: 'center'
    });

    doc.save('nist-800-53-assessment.pdf');
  };

  if (showResults && result) {
    const scorePercentage = Math.round((result.overallScore / (result.familyScores.reduce((sum, f) => sum + f.maxScore, 0))) * 100);
    const pieData = [
      { name: 'Score', value: scorePercentage },
      { name: 'Gap', value: 100 - scorePercentage }
    ];

    let maturityLevel = 'Initial';
    let scoreColor = '#DC3545'; // Red
    if (scorePercentage >= 80) {
      maturityLevel = 'Optimized';
      scoreColor = '#28A745'; // Green
    } else if (scorePercentage >= 60) {
      maturityLevel = 'Managed';
      scoreColor = '#FFC107'; // Yellow
    } else if (scorePercentage >= 40) {
      maturityLevel = 'Defined';
      scoreColor = '#FF9500'; // Orange
    }
    
    const COLORS = [scoreColor, '#E8E8E8'];

    // Prepare data for bar chart
    const barData = result.familyScores.map(family => ({
      name: family.name.replace(/\s*\([^)]*\)/g, ''), // Remove text in parentheses
      score: Math.round((family.score / family.maxScore) * 100)
    }));

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
        
        <div className="max-w-7xl mx-auto p-6">
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

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">NIST 800-53 Security Assessment Results</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Overall Security Maturity Score</h3>
                  <div className="text-5xl font-bold mb-2" style={{ color: scoreColor }}>{scorePercentage}%</div>
                  <div className="text-lg text-gray-600">Maturity Level: {maturityLevel}</div>
                </div>
                
                <div className="flex justify-center">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={pieData}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
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
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Control Family Scores</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={barData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
                  >
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="name" width={140} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recommendations by Control Family</h3>
              <div className="space-y-8">
                {result.familyScores.map((familyScore, index) => (
                  familyScore.recommendations.length > 0 && (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-blue-600 mb-4">{familyScore.name}</h4>
                      <div className="space-y-6">
                        {familyScore.recommendations.map((rec, recIndex) => (
                          <div key={recIndex} className="bg-white p-6 rounded-lg shadow">
                            <h5 className="text-lg font-medium text-gray-900 mb-3">{rec.question}</h5>
                            <div className="mb-4">
                              <span className="text-sm font-medium text-gray-500">Current Implementation:</span>
                              <p className="mt-1 text-gray-700">{rec.selectedOption}</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded">
                              <div className="flex items-start">
                                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                  <span className="font-medium text-blue-600">Recommendation:</span>
                                  <p className="mt-1 text-gray-700">{rec.advice}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <MessageSquareText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Need help implementing these recommendations?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our Cybersecurity Advisor can provide detailed guidance on implementing NIST 800-53 controls and improving your security posture.
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
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Return to our main site to explore more resources</p>
              <div className="flex justify-center space-x-4">
                <a href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Home</a>
                <a href="/simple-assessment" className="text-blue-600 hover:text-blue-800 hover:underline">Try Simple Assessment</a>
                <a href="/advisor" className="text-blue-600 hover:text-blue-800 hover:underline">Speak with Advisor</a>
                <a href="/freesecuritytools" className="text-blue-600 hover:text-blue-800 hover:underline">Free Tools</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NIST 800-53 Security Assessment</h1>
              <p className="mt-1 text-sm text-gray-600">
                Evaluate your organization's alignment with NIST 800-53 security controls
              </p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="mt-4 text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium text-gray-600">
                Question {getCurrentQuestionNumber()} of {totalQuestions}
              </h2>
              <span className="text-sm font-medium text-gray-600">
                {family.name}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(getCurrentQuestionNumber() / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.text}</h3>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left p-4 rounded-lg border ${
                  answers[family.name]?.[currentQuestion] === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                } transition-colors duration-300`}
              >
                {option.text}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentFamily === 0 && currentQuestion === 0}
              className={`flex items-center ${
                currentFamily === 0 && currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <div className="text-gray-600">
              {getCurrentQuestionNumber()} / {totalQuestions}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Need to come back later? You can return to our <a href="/" className="text-blue-600 hover:text-blue-800 hover:underline">home page</a> and restart the assessment anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}