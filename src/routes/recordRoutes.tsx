import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import RecordPage from "../pages/record/RecordPage.tsx";

const recordRoutes: RouteType[] = [
  {
    path: routePath.RECORD,
    element: <RecordPage />,
  },
];

export default recordRoutes;
