import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import ShoppingCart from "../components/shoppingCart";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const { authenticatedUser, logout } = useAuth();

  useEffect(() => {
    if (authenticatedUser) {
      setIsLogin(true);
    }
  }, [authenticatedUser]);

  const handleSignOut = () => {
    logout();
    setIsLogin(false);
  };

  return (
    <div className="bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Navbar />
          <Link
            to="/"
            className="text-4xl text-center font-BlackOpsOne text-white"
          >
            ANIBOOKs
          </Link>
          {isLogin ? (
            <div className="hidden sm:flex sm:items-center">
              <ShoppingCart />
              <div className="hover:underline text-white text-xl font-GentiumPlus">
                <Dropdown
                  label={authenticatedUser.username}
                  arrowIcon={false}
                  inline={true}
                >
                  <Dropdown.Item>
                    <Link to="/order/:userId">My Order</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleSignOut}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          ) : (
            <div className="hidden sm:flex sm:items-center">
              <Link
                to="/login"
                className="text-white text-md font-GentiumPlus hover:underline mr-4"
              >
                Sign in
              </Link>

              <Link
                to="/register"
                className="text-white text-md font-GentiumPlus border px-4 py-2 rounded-lg hover:border-purple-600"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
