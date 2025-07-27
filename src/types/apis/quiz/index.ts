export interface QuizResponse {
  id: number;
  question: string;
  type: "OX" | "MULTIPLE_CHOICE" | "SHORT_ANSWER";
  level: "EASY" | "MEDIUM" | "HARD";
}
