import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import AlarmPage from "../pages/alarm/AlarmPage.tsx";

const alarmRoutes: RouteType[] = [
  {
    path: routePath.ALARM,
    element: <AlarmPage />,
  },
];

export default alarmRoutes;
