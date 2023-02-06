import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="w-full max-w-sm bg-[#121212] shadow border rounded-md hover:border-purple-700 my-4">
      <div className="flex items-center justify-center">
        <Link to="/detail">
          <img
            className="p-7 rounded-t-lg w-[200px] h-[270px] hover:scale-110 ease-in duration-500"
            src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161116/personal%20project/Products/Slime_no.15_itayqw.jpg"
            alt="product image"
          />
        </Link>
      </div>
      <div class="pb-5">
        <Link to="/detail" className="pb-4 text-center">
          <p class="text-s font-GentiumPlus tracking-tight text-white dark:text-white hover:underline ">
            That time I got reincarnated as a slime vol.15
          </p>
        </Link>
        <p className="text-sm text-center font-GentiumPlus text-white pt-4">
          Writer: Fuse
        </p>

        <div class="pt-3 pb-3 pr-4 text-center">
          <span class="text-lg font-bold font-GentiumPlus text-white dark:text-white">
            400 BATH
          </span>
        </div>
        <div class="flex items-center justify-evenly pr-4">
          <a
            href="#"
            class="text-white bg-purple-600 hover:bg-purple-800  font-GentiumPlus rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
          <Link
            to="/checkout"
            class="text-white bg-purple-600 hover:bg-purple-800  font-GentiumPlus rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
}
