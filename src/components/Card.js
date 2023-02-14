import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productApi from "../apis/productApi";
import useCart from "../hooks/useCart";
import { CartContext } from "../contexts/cartContext";

export default function Card({ searchBook }) {
  const [productInfo, setProductInfo] = useState([]);

  const { addToCart } = useCart(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await productApi.getAllProduct();
      setProductInfo(result.data.products);
    };
    fetchProduct();
  }, []);

  const handleAddToCart = productId => {
    addToCart(productId);
  };

  return (
    <>
      {searchBook(productInfo)?.map(el => (
        <div className="w-full max-w-sm bg-[#121212] shadow border rounded-md hover:border-purple-700 my-4">
          <div className="flex items-center justify-center">
            <Link to={`/detail/${el.id}`}>
              <img
                className="p-7 rounded-t-lg w-[200px] h-[270px] hover:scale-110 ease-in duration-500"
                src={el.image}
                alt="product"
              />
            </Link>
          </div>
          <div className="pb-5">
            <Link to={`/detail/${el.id}`} className="pb-4 text-center">
              <p className="text-s font-GentiumPlus tracking-tight text-white dark:text-white hover:underline ">
                {el.name}
              </p>
            </Link>
            <p className="text-sm text-center font-GentiumPlus text-white pt-4">
              {el.writer}
            </p>

            <div className="pt-3 pb-3 pr-4 text-center">
              <span className="text-lg font-bold font-GentiumPlus text-white dark:text-white">
                {`฿ ${el.price}`}
              </span>
            </div>
            <div className="flex items-center justify-evenly pr-4">
              <button
                className="text-white bg-purple-600 hover:bg-purple-800  font-GentiumPlus rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  handleAddToCart(el.id);
                }}
              >
                Add to cart
              </button>

              <Link
                to="/payment"
                className="text-white bg-purple-600 hover:bg-purple-800  font-GentiumPlus rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
