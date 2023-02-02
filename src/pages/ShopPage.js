import Container from "../layouts/Container";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function ShopPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="container mx-auto px-4">
          <div class="flex items-center justify-between py-8">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-black/50 dark:border-gray-700">
              <a href="#" className="flex justify-center">
                <img
                  class="p-8 rounded-t-lg"
                  src="https://res.cloudinary.com/dxz16dyxa/image/upload/c_thumb,w_200,g_face/v1675161116/personal%20project/Products/Slime_no.15_itayqw.jpg"
                  alt="product image"
                />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-[20px] text-center font-GentiumPlus font-bold tracking-tight text-gray-900 dark:text-white">
                    That time I got reincarnated as a slime No.15
                  </h5>
                  <h5 class="text-[18px] text-center font-GentiumPlus tracking-tight text-gray-900 dark:text-white">
                    Fuse
                  </h5>
                </a>

                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold font-GentiumPlus text-gray-900 dark:text-white">
                    400 BATH
                  </span>
                  <div>
                    <a
                      href="#"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
