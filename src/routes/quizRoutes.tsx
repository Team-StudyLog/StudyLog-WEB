import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import QuizPage from "../pages/quiz/QuizPage.tsx";
import QuizDetailPage from "../pages/quiz/QuizDetailPage.tsx";

const quizRoutes: RouteType[] = [
  {
    path: routePath.QUIZ,
    element: <QuizPage />,
  },
  {
    path: routePath.QUIZ_DETAIL,
    element: <QuizDetailPage />,
  },
];

export default quizRoutes;
