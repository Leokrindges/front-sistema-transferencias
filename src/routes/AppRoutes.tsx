import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
