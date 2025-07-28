import type { CategoryResponse } from "../record";

export interface QuizResponse {
  id: number;
  category: string;
  color: string;
  question: string;
  level: "EASY" | "MEDIUM" | "HARD";
}

export interface QuizDetailResponse {
  createdAt: string;
  type: "OX" | "SHORT_ANSWER";
  category: CategoryResponse;
  question: string;
  answer: string;
  level: "EASY" | "MEDIUM" | "HARD";
  recordId: number;
}
