import homeRoutes from "./homeRoutes.tsx";
import myPageRoutes from "./myPageRoutes.tsx";
import type { RouteObject } from "react-router-dom";
import RootLayout from "./layout/RootLayout.tsx";
import NotFound from "../pages/status/error/NotFound.tsx";
import exampleRoutes from "./exampleRoutes.tsx";
import authRoutes from "./authRoutes.tsx";
import alarmRoutes from "./alarmRoutes.tsx";
import friendRoutes from "./friendRoutes.tsx";
import recordRoutes from "./recordRoutes.tsx";
import quizRoutes from "./quizRoutes.tsx";
import mainRoutes from "./mainRoutes.tsx";

const allRoutes = [
  ...exampleRoutes,
  ...homeRoutes,
  ...mainRoutes,
  ...recordRoutes,
  ...quizRoutes,
  ...myPageRoutes,
  ...authRoutes,
  ...alarmRoutes,
  ...friendRoutes,
];

const pageRoutes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: allRoutes,
  },
];

export default pageRoutes;
