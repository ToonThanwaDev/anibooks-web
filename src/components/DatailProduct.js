import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as productApi from "../apis/productApi";

export default function DetailProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const fetchProductId = async () => {
    try {
      const res = await productApi.productById(params.productId);
      setProduct(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductId();
  }, [params.productId]);

  return (
    <div className="md:flex items-center -mx-10">
      <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
        <div className="relative">
          <img src={product.image} className="w-full relative z-10" alt="product image" />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10">
        <div className="mb-10">
          <h1 className="font-bold uppercase text-2xl mb-5 text-white font-GentiumPlus">
            {product.name}
          </h1>
          <p className="text-sm text-white font-GentiumPlus">{product.detail}</p>
        </div>
        <div>
          <div className="inline-block align-bottom mr-5 text-white">
            <span className="text-2xl leading-none align-baseline font-GentiumPlus">฿</span>
            <span className="font-bold text-4xl leading-none align-baseline font-GentiumPlus">
              {product.price}
            </span>
          </div>
          <div className="mt-9 align-bottom flex items-center justify-start">
            <Link to="/payment">
              <button
                type="button"
                className="text-white font-GentiumPlus text-lg bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
