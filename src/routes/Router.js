import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import Homepage from "../pages/Homepage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import DetailPage from "../pages/DetailPage";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
  },
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/shop",
    element: <ShopPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/detail",
    element: <DetailPage />
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
