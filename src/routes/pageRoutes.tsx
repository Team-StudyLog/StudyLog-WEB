import homeRoutes from "./homeRoutes.tsx";
import myPageRoutes from "./myPageRoutes.tsx";
import type {RouteObject} from "react-router-dom";
import RootLayout from "./layout/RootLayout.tsx";
import NotFound from "../pages/status/error/NotFound.tsx";
import exampleRoutes from "./exampleRoutes.tsx";
import authRoutes from "./authRoutes.tsx";

const allRoutes = [
    ...exampleRoutes,
    ...homeRoutes,
    ...myPageRoutes,
    ...authRoutes
]

const pageRoutes: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: allRoutes,
    }
]

export default pageRoutes;