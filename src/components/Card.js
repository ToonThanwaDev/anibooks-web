import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productApi from "../apis/productApi";

export default function Card() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await productApi.getAllProduct();
      setProductInfo(result.data.products);
    };
    fetchProduct();
  }, []);

  return (
    <>
      {productInfo?.map(el => (
        <div className="w-full max-w-sm bg-[#121212] shadow border rounded-md hover:border-purple-700 my-4">
          <div className="flex items-center justify-center">
            <Link to={`/detail/${el.id}`}>
              <img
                className="p-7 rounded-t-lg w-[200px] h-[270px] hover:scale-110 ease-in duration-500"
                src={el.image}
                alt="product image"
              />
            </Link>
          </div>
          <div class="pb-5">
            <Link to={`/detail/${el.id}`} className="pb-4 text-center">
              <p class="text-s font-GentiumPlus tracking-tight text-white dark:text-white hover:underline ">
                {el.name}
              </p>
            </Link>
            <p className="text-sm text-center font-GentiumPlus text-white pt-4">
              {el.writer}
            </p>

            <div class="pt-3 pb-3 pr-4 text-center">
              <span class="text-lg font-bold font-GentiumPlus text-white dark:text-white">
                {el.price}
              </span>
              <span className="text-md leading-none align-baseline font-GentiumPlus text-white">
                ฿
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
                to="/payment"
                class="text-white bg-purple-600 hover:bg-purple-800  font-GentiumPlus rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Purchase
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
