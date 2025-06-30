import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import RecordPage from "../pages/record/RecordPage.tsx";
import RecordDetailPage from "../pages/record/recordDetail/RecordDetailPage.tsx";
import RecordEditPage from "../pages/record/recordEdit/RecordEditPage.tsx";

const recordRoutes: RouteType[] = [
  {
    path: routePath.RECORD,
    element: <RecordPage />,
  },
  {
    path: routePath.RECORD_DETAIL,
    element: <RecordDetailPage />,
  },
  {
    path: routePath.RECORD_EDIT,
    element: <RecordEditPage />,
  },
];

export default recordRoutes;
