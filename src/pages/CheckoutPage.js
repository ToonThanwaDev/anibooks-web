import Header from "../layouts/Header";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div class="relative mx-auto w-full bg-[#121212]">
        <div class="grid min-h-screen grid-cols-10">
          <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div class="mx-auto w-full max-w-lg">
              <h1 class="relative text-2xl font-Brawler text-white sm:text-3xl">
                Secure Checkout
                <span class="mt-2 block h-1 w-10 bg-purple-600 sm:w-20"></span>
              </h1>
              <form action="" class="mt-10 flex flex-col space-y-4">
                <div>
                  <label
                    for="firstName"
                    class="text-xs font-Brawler text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    type="name"
                    id="firstName"
                    name="firstname"
                    placeholder="First Name"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="text-xs font-Brawler text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    type="name"
                    id="lastName"
                    name="lastname"
                    placeholder="Last Name"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div class="relative">
                  <label
                    for="telephone"
                    class="text-xs font-Brawler text-gray-500"
                  >
                    Tel.
                  </label>
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    placeholder="087-xxx-xxxx"
                    class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="relative">
                  <label
                    for="address"
                    class="text-xs font-Brawler text-gray-500"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </form>

              <form className="mt-5">
                <label class="block">
                  <span class="sr-only">Choose File</span>
                  <input
                    type="file"
                    class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </label>
              </form>

              <p class="mt-10 text-center text-sm font-Brawler text-gray-500">
                By placing this order you agree to the{" "}
                <a
                  href="#"
                  class="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
                >
                  Terms and Conditions
                </a>
              </p>
              <button
                type="submit"
                class="mt-4 inline-flex w-full items-center justify-center rounded bg-purple-600 hover:bg-purple-800  font-GentiumPlus py-2.5 px-4 text-base tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
          <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div>
              <img
                src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675402825/personal%20project/Products/cover_image_jujutsu_kzg5fp.jpg"
                alt="bg image"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 h-full w-full bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8] opacity-90"></div>
            </div>
            <div class="relative">
              <div className="flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675416035/personal%20project/Admin/QR_code_payment_oftuu0.jpg"
                  className="w-[350px] h-[450px]"
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
