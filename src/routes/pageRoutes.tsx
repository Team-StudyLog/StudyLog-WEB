import homeRoutes from "./homeRoutes.tsx";
import myPageRoutes from "./myPageRoutes.tsx";
import type { RouteObject } from "react-router-dom";
import RootLayout from "./layout/RootLayout.tsx";
import NotFound from "../pages/status/error/NotFound.tsx";
import authRoutes from "./authRoutes.tsx";
import alarmRoutes from "./alarmRoutes.tsx";
import friendRoutes from "./friendRoutes.tsx";
import recordRoutes from "./recordRoutes.tsx";
import quizRoutes from "./quizRoutes.tsx";
import mainRoutes from "./mainRoutes.tsx";
import PublicLayout from "./layout/PublicLayout.tsx";
import ProtectedLayout from "./layout/ProtectedLayout.tsx";
import rankRoutes from "./rankRoutes.tsx";

const publicRoutes = [...homeRoutes, ...authRoutes];

const protectedRoutes = [
  ...mainRoutes,
  ...recordRoutes,
  ...quizRoutes,
  ...myPageRoutes,
  ...alarmRoutes,
  ...friendRoutes,
  ...rankRoutes,
];

const pageRoutes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <PublicLayout />,
        children: publicRoutes,
      },
      {
        element: <ProtectedLayout />,
        children: protectedRoutes,
      },
    ],
  },
];

export default pageRoutes;
