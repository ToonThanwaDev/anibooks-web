import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/shop",
    element: <ShopPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
