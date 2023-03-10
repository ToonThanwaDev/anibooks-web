import { useEffect, useState } from "react";
import * as orderApi from "../apis/orderApi";

export default function OrderContainer() {
  const [order, setOrder] = useState([]);

  const fetchOrder = async () => {
    try {
      const result = await orderApi.getOrder();
      setOrder(result.data.getAllOrder);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      {order?.map((el) => (
        <div>
          {el.orderItems.map((item) => (
            <div className="grid grid-cols-4 items-center justify-between -mx-8 px-6 py-5">
              <div className="pt-5 font-bold text-md text-white font-GentiumPlus w-36">
                {item.Product.name}
              </div>

              <div className="pt-5 font-bold text-md text-white font-GentiumPlus">
                <img src={item.Product.image} alt="product image" className="h-24" />
              </div>

              <div className="pt-5 font-bold text-md text-white font-GentiumPlus">
                {el.createdAt.substring(0, 10)}
              </div>

              <div className="text-center text-white font-GentiumPlus text-md uppercase w-20 rounded-md ml-12">
                <p>{el.status}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
