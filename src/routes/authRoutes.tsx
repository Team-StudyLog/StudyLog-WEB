import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import LoginPage from "../pages/auth/login/LoginPage.tsx";
import Redirection from "../pages/auth/login/Redirection.tsx";
import SignupPage from "../pages/auth/signup/SignupPage.tsx";

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
  {
    path: routePath.SIGNUP,
    element: <SignupPage />,
  },
];

export default authRoutes;
