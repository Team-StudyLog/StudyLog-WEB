export interface QuizResponse {
  id: number;
  question: string;
  type: "OX" | "SHORT_ANSWER";
  level: "EASY" | "MEDIUM" | "HARD";
}
