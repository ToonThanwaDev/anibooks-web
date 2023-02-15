import { useEffect, useState } from "react";
import * as orderApi from "../../apis/orderApi";

export default function AdminProcessContainer() {
  const [status, setStatus] = useState("pending");
  const [admin, setAdmin] = useState([]);

  const fetchOrder = async () => {
    try {
      const res = await orderApi.gerOrderUser();
      setAdmin(res.data.getOrderUser);
    } catch (err) {
      console.log(err);
    }
  };

  const handleApprove = async (id, status) => {
    try {
      await orderApi.updateOrder(id, status);
      fetchOrder();
      setStatus("completed");
    } catch (err) {
      console.log(err);
    }
  };

  const handleReject = async (id, status) => {
    try {
      await orderApi.updateOrder(id, status);
      fetchOrder();
      setStatus("rejected");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      {admin.map(el => (
        <div className="container px-4 py-4 border-b">
          <div className="flex items-center justify-between mt-10 mb-5 ">
            <div className="font-bold text-md text-white font-GentiumPlus ">
              {el.id}
            </div>
            <div className="flex flex-row items-center ml-20 pl-6">
              <div className="flex">
                <div className="font-bold text-md text-white font-GentiumPlus pl-2 w-36">
                  {/* {el.Payment.slipImage} */}
                </div>
              </div>
            </div>
            <div className="text-white font-GentiumPlus text-md pl-32">
              {/* {el.username} */}
            </div>
            <div>
              <button
                className="text-center text-white font-GentiumPlus text-md bg-[#4BB543] uppercase w-20 rounded-md mr-4"
                onClick={() => {
                  handleApprove(el.id, "completed");
                }}
              >
                <p>approve</p>
              </button>
              <button
                className="text-center text-white font-GentiumPlus text-md bg-[#FF0000] uppercase w-20 rounded-md "
                onClick={() => {
                  handleReject(el.id, "rejected");
                }}
              >
                <p>reject</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
