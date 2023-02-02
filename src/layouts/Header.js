import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <div class="bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8]">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          <Navbar />
          <Link
            to="/"
            className="text-4xl text-center font-BlackOpsOne text-white"
          >
            ANIBOOKs
          </Link>
          <div class="hidden sm:flex sm:items-center">
            <Link
              to="/login"
              class="text-white text-md font-GentiumPlus hover:underline mr-4"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              class="text-white text-md font-GentiumPlus border px-4 py-2 rounded-lg hover:border-purple-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
