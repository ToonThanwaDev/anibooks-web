import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Header() {
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
        </div>
      </div>
    </div>
  );
}
