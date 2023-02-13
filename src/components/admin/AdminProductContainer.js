import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productApi from "../../apis/productApi";

export default function AdminProductContainer() {
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
        <div className="container px-4 py-4 border-b">
          <div className="flex items-center justify-between mt-10 mb-5 ">
            <div className="font-bold text-md text-white font-GentiumPlus ml-4">
              {el.id}
            </div>

            <div className="flex items-center ml-20 pl-6">
              <div className="w-20">
                <img className="h-24" src={el.image} alt="product" />
              </div>

              <div className="w-40">
                <div className="font-bold text-md text-white font-GentiumPlus">
                  {el.name}
                </div>
              </div>
            </div>

            <div className="text-center font-GentiumPlus text-md text-white">
              {`฿ ${el.price}`}
            </div>

            <div className="flex">
              <Link
                to="/admin/edit"
                className="text-center text-white font-GentiumPlus text-md bg-[#9049FF] uppercase w-20 rounded-md mr-6"
              >
                <p>edit</p>
              </Link>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 5.98001C17.67 5.65001 14.32 5.48001 10.98 5.48001C9 5.48001 7.02 5.58001 5.04 5.78001L3 5.98001"
                    stroke="#EE8877"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                    stroke="#EE8877"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.8499 9.14001L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14001"
                    stroke="#EE8877"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.3301 16.5H13.6601"
                    stroke="#EE8877"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12.5H14.5"
                    stroke="#EE8877"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
