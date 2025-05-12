import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import LoginPage from "../pages/auth/LoginPage.tsx";

const authRoutes: RouteType[] = [{
  path: routePath.LOGINPAGE,
  element: <LoginPage />,
}]

export default authRoutes;