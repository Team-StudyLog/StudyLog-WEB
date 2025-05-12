import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/queryClient.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pageRoutes from "./routes/pageRoutes.tsx";

const router = createBrowserRouter(pageRoutes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
