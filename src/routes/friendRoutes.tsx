import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import FriendPage from "../pages/friend/FriendPage.tsx";

const friendRoutes: RouteType[] = [
  {
    path: routePath.FRIEND,
    element: <FriendPage />,
  },
];

export default friendRoutes;
