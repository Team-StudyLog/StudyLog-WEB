import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import LoginPage from "../pages/auth/login/LoginPage.tsx";
import Redirection from "../pages/auth/login/Redirection.tsx";
import SignupPage from "../pages/auth/signup/SignupPage.tsx";
import LoginCompletePage from "../pages/auth/login/LoginCompletePage.tsx";

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGINPAGE,
    element: <LoginPage />,
  },
  {
    path: routePath.LOGIN_COMPLETE,
    element: <LoginCompletePage />,
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
