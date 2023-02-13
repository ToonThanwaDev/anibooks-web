export default function OrderContainer() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between -mx-8 px-6 py-5">
          <div className="flex jw-2/5">
            <div className="w-20 ml-2">
              <img
                className="h-24"
                src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Demon_Slayer_tcboxo.webp"
                alt="product"
              />
            </div>

            <div className="flex flex-col justify-between ml-2 flex-grow">
              <span className="pt-9 font-bold text-md text-white font-GentiumPlus">
                Demon Slayer no.12
              </span>
            </div>
          </div>

          <div className="flex w-1/5 pl-20">
            <h3 className="text-white font-GentiumPlus text-md pl-6">3 pcs.</h3>
          </div>

          <span className="text-center w-1/5 font-GentiumPlus text-md text-white pl-8">
            ฿ 400.00
          </span>

          <div className="text-center text-white font-GentiumPlus text-md bg-[#5869FF] uppercase w-20 rounded-md mr-12">
            <p>pending</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between -mx-8 px-6 py-5">
          <div className="flex jw-2/5">
            <div className="w-20 ml-2">
              <img
                className="h-24"
                src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Overlord_no.16_bwzw5j.jpg"
                alt="product"
              />
            </div>

            <div className="flex flex-col justify-between ml-2 flex-grow w-1/5">
              <span className="pt-9 font-bold text-md text-white font-GentiumPlus">
                Overlord no.16
              </span>
            </div>
          </div>

          <div className="flex w-1/5 pl-20">
            <h3 className="text-white font-GentiumPlus text-md ml-12">
              2 pcs.
            </h3>
          </div>

          <span className="text-center w-1/5 font-GentiumPlus text-md text-white pl-14">
            ฿ 250.00
          </span>

          <div className="text-center text-white font-GentiumPlus text-md bg-[#4BB543] uppercase w-20 rounded-md mr-12">
            <p>complete</p>
          </div>
        </div>
      </div>
    </>
  );
}
