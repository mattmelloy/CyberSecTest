export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  points: number;
  feedback: string;
}

export interface QuizResult {
  score: number;
  maxScore: number;
  recommendations: string[];
}

// Advanced Quiz Types
export interface ControlFamily {
  name: string;
  questions: AdvancedQuestion[];
}

export interface AdvancedQuestion {
  text: string;
  options: AdvancedOption[];
  advice: string;
}

export interface AdvancedOption {
  value: number;
  text: string;
}

export interface AdvancedQuizResult {
  overallScore: number;
  familyScores: {
    name: string;
    score: number;
    maxScore: number;
    recommendations: AdvancedRecommendation[];
  }[];
}

export interface AdvancedRecommendation {
  question: string;
  selectedOption: string;
  advice: string;
  score: number;
  maxScore: number;
}