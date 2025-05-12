import type {RouteType} from "../types/routeType.ts";
import routePath from "./routePath.ts";
import MyPage from "../pages/myPage/MyPage.tsx";

const myPageRoutes: RouteType[] = [{
    path: routePath.MYPAGE,
    element: <MyPage />,
}]

export default myPageRoutes;