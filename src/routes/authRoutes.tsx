import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import LoginPage from "../pages/auth/LoginPage.tsx";
import Redirection from "../pages/auth/Redirection.tsx";

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGINPAGE,
    element: <LoginPage />,
  },
  {
    path: routePath.KAKAO_REDIRECTION,
    element: <Redirection platform="kakao" />,
  },
  {
    path: routePath.GOOGLE_REDIRECTION,
    element: <Redirection platform="google" />,
  },
];

export default authRoutes;
