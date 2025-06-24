import MainPage from "../pages/main/MainPage.tsx";
import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";

const mainRoutes: RouteType[] = [
  {
    path: routePath.MAIN,
    element: <MainPage />,
  },
];

export default mainRoutes;
