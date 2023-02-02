export default function Homepage() {
  return;
  // Header
  <div class="bg-[#121212] w-full min-h-screen m-0 ">
    <div class="bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8]">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          {/* <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-[#5516B8] "
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 52 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 3.1875C0 2.54103 0.256807 1.92105 0.713927 1.46393C1.17105 1.00681 1.79103 0.75 2.4375 0.75H49.5625C50.209 0.75 50.829 1.00681 51.2861 1.46393C51.7432 1.92105 52 2.54103 52 3.1875C52 3.83397 51.7432 4.45395 51.2861 4.91107C50.829 5.36819 50.209 5.625 49.5625 5.625H2.4375C1.79103 5.625 1.17105 5.36819 0.713927 4.91107C0.256807 4.45395 0 3.83397 0 3.1875ZM0 17C0 16.3535 0.256807 15.7335 0.713927 15.2764C1.17105 14.8193 1.79103 14.5625 2.4375 14.5625H49.5625C50.209 14.5625 50.829 14.8193 51.2861 15.2764C51.7432 15.7335 52 16.3535 52 17C52 17.6465 51.7432 18.2665 51.2861 18.7236C50.829 19.1807 50.209 19.4375 49.5625 19.4375H2.4375C1.79103 19.4375 1.17105 19.1807 0.713927 18.7236C0.256807 18.2665 0 17.6465 0 17ZM2.4375 28.375C1.79103 28.375 1.17105 28.6318 0.713927 29.0889C0.256807 29.546 0 30.166 0 30.8125C0 31.459 0.256807 32.079 0.713927 32.5361C1.17105 32.9932 1.79103 33.25 2.4375 33.25H49.5625C50.209 33.25 50.829 32.9932 51.2861 32.5361C51.7432 32.079 52 31.459 52 30.8125C52 30.166 51.7432 29.546 51.2861 29.0889C50.829 28.6318 50.209 28.375 49.5625 28.375H2.4375Z"
                fill="white"
              />
            </svg>
          </button> */}

          <a
            href="#"
            className="text-4xl text-center font-BlackOpsOne text-white"
          >
            ANIBOOKs
          </a>
          <div class="hidden sm:flex sm:items-center">
            <a
              href="#"
              class="text-white text-md font-GentiumPlus hover:text-gray-500 mr-4"
            >
              Sign in
            </a>
            <a
              href="#"
              class="text-white text-md font-GentiumPlus border px-4 py-2 rounded-lg hover:border-purple-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Adds */}
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide relative container mx-auto px-4 py-4"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img
            src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161116/personal%20project/Products/Top-10-Manga-of-2022_bwgi1j.webp"
            class="block w-full"
            alt="Carousel image 1"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161119/personal%20project/Products/manga-series-1280x720_qv1ubb.png"
            class="block w-full"
            alt="Carousel image 2"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675246731/personal%20project/Products/Jujutsu_Manga_r3mq6e.jpg"
            class="block w-full"
            alt="Carousel image 3"
          />
        </div>
      </div>
    </div>

    {/* Best Seller */}
    <div>
      <h1 className="m-5 text-[40px] font-Brawler text-[#9049FF]">
        BEST SELLER
      </h1>
      <hr className="border-[#9049FF]" />
    </div>

    {/* Products */}
    <div className="container mx-auto px-4">
      <div class="flex items-center justify-between py-8">
        <img
          src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161118/personal%20project/Products/Eminence_in_shadow_no.5_aj4ilb.jpg"
          className="w-[150px] h-[230px]"
        />
        <img
          src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Demon_Slayer_tcboxo.webp"
          className="w-[150px] h-[230px]"
        />
        <img
          src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Blue_lock_no.6_jdiiou.jpg"
          className="w-[150px] h-[230px]"
        />
        <img
          src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/jujutsu_no.16_mzzhpa.jpg"
          className="w-[150px] h-[230px]"
        />
      </div>
    </div>
    {/* Footer */}
    <section class="bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8]">
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <h1 className="text-4xl text-center font-BlackOpsOne text-white">
            ANIBOOKs
          </h1>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <div class="px-5 py-2">
            <a
              href="#"
              class="text-base leading-6 text-white hover:text-gray-500"
            >
              Home
            </a>
          </div>
          <div class="px-5 py-2">
            <a
              href="#"
              class="text-base leading-6 text-white hover:text-gray-500"
            >
              Shop
            </a>
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
  </div>;
}
