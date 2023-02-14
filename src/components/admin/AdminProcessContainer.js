import { Link } from "react-router-dom";

export default function AdminProcessContainer() {
  return (
    <>
      <div className="container px-4 py-4 border-b">
        <div className="flex items-center justify-between mt-10 mb-5 ">
          <div className="font-bold text-md text-white font-GentiumPlus ">
            1
          </div>

          <div className="flex flex-row items-center ml-20 pl-6">
            <div className="w-20">
              <img
                className="h-24"
                src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Demon_Slayer_tcboxo.webp"
                alt="product"
              />
            </div>

            <div className="flex">
              <div className="font-bold text-md text-white font-GentiumPlus pl-2 w-36">
                Demon Slayer no.12
                <h3 className="text-white font-GentiumPlus text-md ">3 pcs.</h3>
              </div>
            </div>
          </div>

          <div className="text-white font-GentiumPlus text-md pl-32">
            TodorokiShoto
          </div>

          <div className="text-center font-GentiumPlus text-md text-white pl-12 pr-3">
            ฿ 400.00
          </div>

          <Link
            to="#"
            className="text-center text-white font-GentiumPlus text-md bg-[#5869FF] uppercase w-20 rounded-md mr-5"
          >
            <p>pending</p>
          </Link>
        </div>
      </div>
    </>
  );
}
