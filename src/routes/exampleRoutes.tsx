import type { RouteType } from "../types/routeType.ts";
import routePath from "./routePath.ts";
import ExamplePage from "../pages/example/ExamplePage.tsx";

const exampleRoutes: RouteType[] = [{
  path: routePath.EXAMPLE,
  element: <ExamplePage />,
}]

export default exampleRoutes;