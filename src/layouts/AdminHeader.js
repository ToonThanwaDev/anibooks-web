import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminHeader() {
  const [isLogin, setIsLogin] = useState(false);

  const { logout } = useAuth();

  const handleSignOut = () => {
    logout();
    setIsLogin(false);
  };

  return (
    <>
      <div className="bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="hidden sm:flex sm:items-center">
              <Link
                to="/admin/process"
                className="text-white text-lg font-GentiumPlus hover:underline mr-4"
              >
                Process
              </Link>

              <Link
                to="/admin/product"
                className="text-white text-lg font-GentiumPlus hover:underline mr-4"
              >
                Product
              </Link>
            </div>
            <Link
              to="/"
              className="text-4xl text-center font-BlackOpsOne text-white pr-16"
            >
              ANIBOOKs
            </Link>
            <div className="hidden sm:flex sm:items-center">
              <button
                className="text-white text-lg font-GentiumPlus hover:underline mr-4"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
