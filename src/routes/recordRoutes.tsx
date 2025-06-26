import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import RecordPage from "../pages/record/RecordPage.tsx";
import RecordDetailPage from "../pages/record/recordDetail/RecordDetailPage.tsx";

const recordRoutes: RouteType[] = [
  {
    path: routePath.RECORD,
    element: <RecordPage />,
  },
  {
    path: routePath.RECORD_DETAIL,
    element: <RecordDetailPage />,
  },
];

export default recordRoutes;
