import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import QuizPage from "../pages/quiz/QuizPage.tsx";

const quizRoutes: RouteType[] = [
  {
    path: routePath.QUIZ,
    element: <QuizPage />,
  },
];

export default quizRoutes;
