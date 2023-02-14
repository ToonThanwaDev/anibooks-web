import Header from "../layouts/Header";
import Container from "../layouts/Container";
import Footer from "../layouts/Footer";
import OrderContainer from "../components/OrderContainer";

export default function OrderPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto pt-20 pb-20 ">
        <div className="flex shadow-md justify-center">
          <div className="w-3/4 bg-gradient-to-tr from-[#9049FF]/60 to-[#5F0FDD]/60 shadow-2xl shadow-purple-500 px-10 py-10">
            <div className="flex justify-center border-b pb-8">
              <h1 className="font-GentiumPlus text-2xl text-white">My Order</h1>
            </div>
            <div className="flex justify-between mt-10 mb-5 ">
              <h3 className="font-GentiumPlus text-white text-md uppercase w-2/5 ">
                Products
              </h3>
              <h3 className="font-GentiumPlus text-white text-md uppercase w-1/5 pl-16">
                Status
              </h3>
            </div>
            <OrderContainer />
          </div>
        </div>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
