import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import FriendPage from "../pages/friend/FriendPage.tsx";
import FriendAddPage from "../pages/friend/FriendAddPage.tsx";

const friendRoutes: RouteType[] = [
  {
    path: routePath.FRIEND,
    element: <FriendPage />,
  },
  {
    path: routePath.FRIEND_ADD,
    element: <FriendAddPage />,
  },
];

export default friendRoutes;
