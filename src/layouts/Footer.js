import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section class="bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8]">
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <h1 className="text-4xl text-center font-BlackOpsOne text-white">
            ANIBOOKs
          </h1>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <div class="px-5 py-2">
            <Link
              to="/"
              class="text-base leading-6 text-white hover:text-gray-500"
            >
              Home
            </Link>
          </div>
          <div class="px-5 py-2">
            <Link
              to="/shop"
              class="text-base leading-6 text-white hover:text-gray-500"
            >
              Shop
            </Link>
          </div>
          <div class="px-5 py-2">
            <a
              href="#"
              class="text-base leading-6 text-white hover:text-gray-500"
            >
              About Us
            </a>
          </div>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 ANIBOOKs, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
