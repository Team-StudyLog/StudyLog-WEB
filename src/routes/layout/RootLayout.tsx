import {QueryErrorResetBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import Loading from "../../pages/status/Loading.tsx";
import Error from "../../pages/status/error/Error.tsx";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <QueryErrorResetBoundary>
            {({reset}) => (
                <ErrorBoundary onReset={reset} FallbackComponent={Error}>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    )
}

export default RootLayout;