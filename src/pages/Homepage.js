import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";
import SlideShow from "../components/SlideShow";

export default function Homepage() {
  return (
    <>
      <Header />
      <Container>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide relative container mx-auto px-4 py-4 flex justify-center"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-[80%] overflow-hidden">
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
                src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675320010/personal%20project/Products/Jujutsu_kbk84r.jpg"
                class="block w-full"
                alt="Carousel image 3"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Best Seller */}
      <Container>
        <div className="ml-6">
          <h1 className=" text-[40px] font-Brawler text-[#9049FF]">
            BEST SELLER
          </h1>
        </div>
        <hr className="border-[#9049FF]" />
      </Container>

      {/* Products */}

      <Container>
        <SlideShow />
        <Footer />
      </Container>
    </>
  );
}
