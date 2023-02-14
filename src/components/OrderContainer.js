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
  console.log(order);

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      {order?.map(el => (
        <div>
          <div className="flex items-center justify-between -mx-8 px-6 py-5">
            <div className="flex jw-2/5">
              <div className="flex flex-col justify-between ml-2 flex-grow">
                <div className="pt-5 font-bold text-md text-white font-GentiumPlus">
                  {el.createdAt.substring(0, 10)}
                </div>
              </div>
            </div>

            <div className="text-center text-white font-GentiumPlus text-md bg-[#5869FF] uppercase w-20 rounded-md mr-12">
              <p>{el.status}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
