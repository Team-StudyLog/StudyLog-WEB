import RankPage from "../pages/rank/RankPage";
import type { RouteType } from "../types/routeType";
import routePath from "./routePath";

const rankRoutes: RouteType[] = [
  {
    path: routePath.RANK,
    element: <RankPage />,
  },
];

export default rankRoutes;
