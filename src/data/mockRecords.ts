export type RecordT = {
  id: number;
  title: string;
  category: string;
  color: string;
  isQuiz: boolean;
};

export const mockRecords: RecordT[] = [
  {
    id: 1,
    title: "sec의 도함수는?",
    category: "미적분",
    color: "#FCD44F",
    isQuiz: false,
  },
  {
    id: 2,
    title: "삼각함수와 도함수",
    category: "미적분",
    color: "#FCD44F",
    isQuiz: true,
  },
  {
    id: 3,
    title: "김영한의 스프링 강의 수강",
    category: "스프링",
    color: "#7FF48D",
    isQuiz: false,
  },
  {
    id: 4,
    title: "코틀린 공부",
    category: "안드로이드",
    color: "#E186FF",
    isQuiz: true,
  },
  {
    id: 5,
    title: "자바스크립트 비동기 처리",
    category: "프론트엔드",
    color: "#db771f",
    isQuiz: false,
  },
  {
    id: 6,
    title: "리액트 훅스 이해하기",
    category: "프론트엔드",
    color: "#d68a46",
    isQuiz: true,
  },
  {
    id: 7,
    title: "CSS Flexbox 레이아웃",
    category: "프론트엔드",
    color: "#1f8ddb",
    isQuiz: false,
  },
  {
    id: 8,
    title: "Node.js 비동기 처리",
    category: "백엔드",
    color: "#f0db4f",
    isQuiz: true,
  },
  {
    id: 9,
    title: "SQL 데이터베이스 설계",
    category: "데이터베이스",
    color: "#00758F",
    isQuiz: false,
  },
  {
    id: 10,
    title: "GraphQL API 설계",
    category: "백엔드",
    color: "#E10098",
    isQuiz: true,
  },
];
