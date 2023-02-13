import { Link } from "react-router-dom";

export default function AdminHeader() {
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
              className="text-4xl text-center font-BlackOpsOne text-white"
            >
              ANIBOOKs
            </Link>
            <div className="hidden sm:flex sm:items-center">
              <Link
                to="#"
                className="text-white text-lg font-GentiumPlus hover:underline mr-4"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
