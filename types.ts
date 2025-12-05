export interface Option {
  label: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  category: string; // e.g., "Communication", "Trust", "Values"
}

export interface TestResult {
  title: string;
  description: string;
  colorClass: string;
  minScore: number;
  maxScore: number;
  advice: string[];
}

export enum AppState {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
}
