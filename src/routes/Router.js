import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import Homepage from "../pages/Homepage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/admin/AdminPage";
import DetailPage from "../pages/DetailPage";
import PaymentPage from "../pages/PaymentPage";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import OrderPage from "../pages/OrderPage";
import CartPage from "../pages/CartPage";
import AdminProductPage from "../pages/admin/AdminProductPage";
import AddProduct from "../pages/admin/AddProduct";
import EditProduct from "../pages/admin/EditProduct";

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
    path: "/detail/:productId",
    element: <DetailPage />
  },
  {
    path: "/payment",
    element: (
      <ProtectedRoute>
        <PaymentPage />
      </ProtectedRoute>
    )
  },
  {
    path: "/order/:userId",
    element: (
      <ProtectedRoute>
        <OrderPage />
      </ProtectedRoute>
    )
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/process",
    element: <AdminPage />
  },
  {
    path: "/admin/product",
    element: <AdminProductPage />
  },
  {
    path: "/admin/add",
    element: <AddProduct />
  },
  {
    path: "/admin/edit",
    element: <EditProduct />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
