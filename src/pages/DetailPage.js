import "../components/Xmark.css";
import React, { useCallback } from "react";
import Header from "../layouts/Header";
import CloseButton from "../components/CloseButton";
import { Link } from "react-router-dom";

export default function DetailPage() {
  const handleClick = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <>
      <Header />
      <div className="min-w-screen min-h-screen bg-[#121212] flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-gradient-to-tr from-[#9049FF]/60 to-[#5F0FDD]/60 shadow-2xl shadow-purple-500 p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <CloseButton />
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161116/personal%20project/Products/Slime_no.15_itayqw.jpg"
                  className="w-full relative z-10"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5 text-white font-GentiumPlus">
                  That time I got reincarnated as a slime vol.15
                </h1>
                <p className="text-sm text-white font-GentiumPlus">
                  A collection of short side stories taking place in the world
                  of Tensura The ordinary Mikami Satoru found himself dying
                  after being stabbed by a slasher. It should have been the end
                  of his meager 37 years, but he found himself deaf and blind
                  after hearing a mysterious voice. He had been reincarnated
                  into a slime! While complaining about becoming the weak but
                  famous slime and enjoying the life of a slime at the same
                  time, Mikami Satoru met with the Catastrophe-level monster
                  “Storm Dragon Veldora”, and his fate began to move.
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5 text-white">
                  <span className="text-2xl leading-none align-baseline font-GentiumPlus">
                    ฿
                  </span>
                  <span className="font-bold text-4xl leading-none align-baseline font-GentiumPlus">
                    400
                  </span>
                </div>
                <div className="mt-6 align-bottom flex items-center justify-evenly">
                  <button
                    type="button"
                    className="text-white font-GentiumPlus text-lg bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  >
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> Add to cart
                  </button>
                  <Link to="/checkout">
                    <button
                      type="button"
                      className="text-white font-GentiumPlus text-lg bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
