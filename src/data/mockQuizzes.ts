export type QuizT = {
  id: number;
  title: string;
  category: string;
  color: string;
  level: "easy" | "medium" | "hard";
};

export const mockQuizzes: QuizT[] = [
  {
    id: 1,
    title: "sec의 도함수는?",
    category: "미적분",
    color: "#FFB6C1",
    level: "easy",
  },
  {
    id: 2,
    title: "cos의 도함수는?",
    category: "미적분",
    color: "#FFB6C1",
    level: "medium",
  },
  {
    id: 3,
    title: "sin의 도함수는?",
    category: "미적분",
    color: "#FFB6C1",
    level: "hard",
  },
  {
    id: 4,
    title: "벡터의 내적은?",
    category: "기하와 벡터",
    color: "#ADD8E6",
    level: "easy",
  },
  {
    id: 5,
    title: "벡터의 외적은?",
    category: "기하와 벡터",
    color: "#ADD8E6",
    level: "medium",
  },
  {
    id: 6,
    title: "DI(의존성 주입)의 설명으로 옳은 것은?",
    category: "스프링",
    color: "#90EE90",
    level: "hard",
  },
  {
    id: 7,
    title: "스프링의 AOP란?",
    category: "스프링",
    color: "#90EE90",
    level: "easy",
  },
  {
    id: 8,
    title: "스프링의 DI란?",
    category: "스프링",
    color: "#90EE90",
    level: "medium",
  },
  {
    id: 9,
    title: "자바의 컬렉션 프레임워크란?",
    category: "자바",
    color: "#FFD700",
    level: "hard",
  },
  {
    id: 10,
    title: "자바의 인터페이스란?",
    category: "자바",
    color: "#FFD700",
    level: "easy",
  },
  {
    id: 11,
    title: "자바의 추상 클래스란? 텍스트가 길어지면 이런식으로 표시됩니다",
    category: "자바",
    color: "#FFD700",
    level: "medium",
  },
  {
    id: 12,
    title: "자바의 예외 처리란?",
    category: "자바",
    color: "#FFD700",
    level: "hard",
  },
];
