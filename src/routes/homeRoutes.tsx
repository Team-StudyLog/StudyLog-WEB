import type {RouteType} from "../types/routeType.ts";
import routePath from "./routePath.ts";
import HomePage from "../pages/home/HomePage.tsx";

const homeRoutes: RouteType[] = [{
    path: routePath.HOMEPAGE,
    element: <HomePage />,
}]

export default homeRoutes;