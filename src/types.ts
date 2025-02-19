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