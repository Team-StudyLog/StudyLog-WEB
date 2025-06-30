export type RecordQuizT = {
  id: number;
  title: string;
  level: "easy" | "medium" | "hard";
};

export const mockRecordQuizzes: RecordQuizT[] = [
  {
    id: 1,
    title: "sec의 도함수는?",
    level: "easy",
  },
  {
    id: 2,
    title: "cos의 도함수는?",
    level: "medium",
  },
  {
    id: 3,
    title: "sin의 도함수는?",
    level: "hard",
  },
];
