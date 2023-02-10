import Header from "../layouts/Header";
import Container from "../layouts/Container";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <>
      <Header />
      <Container>
        <div className="container mx-auto pt-20 pb-20 ">
          <div className="flex shadow-md justify-center">
            <div className="w-3/4 bg-gradient-to-tr from-[#9049FF]/60 to-[#5F0FDD]/60 shadow-2xl shadow-purple-500 px-10 py-10">
              <div className="flex justify-center border-b pb-8">
                <h1 className="font-GentiumPlus text-2xl text-white">
                  Shopping Cart
                </h1>
              </div>
              <div className="flex justify-between mt-10 mb-5 ">
                <h3 className="font-GentiumPlus text-white text-md uppercase w-2/5 ">
                  Product Details
                </h3>
                <h3 className="font-GentiumPlus text-center text-white text-md uppercase w-1/5 pr-16 ">
                  Quantity
                </h3>
                <h3 className="font-GentiumPlus text-center text-white text-md uppercase w-1/5 pl-9">
                  Price
                </h3>
                <h3 className="invisible">invisible delete</h3>
              </div>
              <div className="flex items-center justify-between hover:bg-white/10 -mx-8 px-6 py-5">
                <div className="flex jw-2/5">
                  <div className="w-20 ml-2">
                    <img
                      className="h-24"
                      src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Demon_Slayer_tcboxo.webp"
                      alt="product"
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-2 flex-grow">
                    <span className="pt-9 font-bold text-md text-white font-GentiumPlus">
                      Demon Slayer no.12
                    </span>
                  </div>
                </div>

                <div className="flex w-1/5 pl-20">
                  <button className="text-white text-lg hover:underline">
                    -
                  </button>

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value="1"
                  />

                  <button className="text-white text-lg hover:underline">
                    +
                  </button>
                </div>
                <span className="text-center w-1/5 font-GentiumPlus text-md text-white">
                  $400.00
                </span>
                <button className="pr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 5.98001C17.67 5.65001 14.32 5.48001 10.98 5.48001C9 5.48001 7.02 5.58001 5.04 5.78001L3 5.98001"
                      stroke="#EE8877"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                      stroke="#EE8877"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.8499 9.14001L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14001"
                      stroke="#EE8877"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.3301 16.5H13.6601"
                      stroke="#EE8877"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 12.5H14.5"
                      stroke="#EE8877"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex justify-between">
                <Link
                  to="/shop"
                  className="flex font-GentiumPlus text-white hover:underline text-md mt-10"
                >
                  Continue Shopping
                </Link>
                <div>
                  <div className="flex font-GentiumPlus justify-between py-6 text-lg uppercase text-white">
                    <span>Total cost</span>
                    <span>$600</span>
                  </div>
                  <button className="bg-indigo-500 font-GentiumPlus hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}
