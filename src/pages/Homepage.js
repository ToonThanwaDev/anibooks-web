import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";
import SlideShow from "../components/SlideShow";
import { Carousel } from "flowbite-react";

export default function Homepage() {
  return (
    <>
      <Header />
      <Container>
        <div className="py-4 container mx-auto px-4 w-[1280px] h-[760px] ">
          <Carousel slideInterval={3000}>
            <img
              src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161116/personal%20project/Products/Top-10-Manga-of-2022_bwgi1j.webp"
              alt="Adds 1"
            />
            <img
              src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675402404/personal%20project/Admin/manga-series-1280x720_qv1ubb_1_bqpvqe.png"
              alt="Adds 2"
            />
            <img
              src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675403313/personal%20project/Products/Jujutsu_3_1_r4hfik.jpg"
              alt="Adds 3"
            />
            <img
              src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675402619/personal%20project/Products/desktop-wallpaper-chainsawman-volume-cover-chainsaw-man-manga_u3hqr0.jpg"
              alt="Adds 4"
            />
          </Carousel>
        </div>
      </Container>

      {/* Best Seller */}
      <Container>
        <div className="ml-10">
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
