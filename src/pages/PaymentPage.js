import PaymentForm from "../features/auth/PaymentForm";
import Header from "../layouts/Header";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div className="relative mx-auto w-full bg-[#121212]">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-Brawler text-white sm:text-3xl">
                Secure Checkout
                <span clasNames="mt-2 block h-1 w-10 bg-purple-600 sm:w-20"></span>
              </h1>

              <PaymentForm />
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div>
              <img
                src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675403313/personal%20project/Admin/Jujutsu_3_1_r4hfik.jpg"
                alt="background"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8] opacity-90"></div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675416035/personal%20project/Admin/QR_code_payment_oftuu0.jpg"
                  className="w-[350px] h-[450px]"
                  alt="slip"
                />
              </div>
              <p className="text-xl text-white m-4 text-center font-Brawler">
                Account Number
                <br />
                <br />
                7xx-xxx-4996 Kasikorn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
