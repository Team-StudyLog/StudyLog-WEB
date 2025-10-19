import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/queryClient.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pageRoutes from "./routes/pageRoutes.tsx";
import { ToastContainer } from "react-toastify";
import "@ant-design/v5-patch-for-react-19";

const router = createBrowserRouter(pageRoutes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      <ToastContainer
        position={"bottom-center"}
        autoClose={2000}
        pauseOnHover={false}
      />
    </QueryClientProvider>
  );
}

export default App;
