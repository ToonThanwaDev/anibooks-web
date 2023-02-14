import Header from "../layouts/Header";
import Container from "../layouts/Container";
import Footer from "../layouts/Footer";
import CartContainer from "../features/cart/CartContainer";
import { Link } from "react-router-dom";
import TotalCost from "../components/TotalCost";

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
                  Products
                </h3>
                <h3 className="font-GentiumPlus text-center text-white text-md uppercase w-1/5 pr-16 ">
                  Quantity
                </h3>
                <h3 className="font-GentiumPlus text-center text-white text-md uppercase w-1/5 pl-9">
                  Price
                </h3>
                <h3 className="invisible">invisible delete</h3>
              </div>

              <CartContainer />
              <div className="flex justify-between">
                <Link
                  to="/shop"
                  className="flex font-GentiumPlus text-red-500 hover:underline text-md mt-10"
                >
                  Continue Shopping
                </Link>
                <TotalCost />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}
