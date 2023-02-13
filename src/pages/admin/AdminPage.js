import AdminProcessContainer from "../../components/admin/AdminProcessContainer";
import AdminHeader from "../../layouts/AdminHeader";

export default function AdminPage() {
  return (
    <>
      <AdminHeader />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center my-6 py-4">
          <div className="flex justify-center border-b pb-8 w-full">
            <h1 className="font-GentiumPlus text-4xl font-bold text-white">
              Confirm Order
            </h1>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-5 ">
          <h3 className="font-GentiumPlus text-white text-md uppercase w-2/5 ">
            Order
          </h3>
          <h3 className="font-GentiumPlus text-white text-md uppercase w-2/5 ">
            Products
          </h3>

          <h3 className="font-GentiumPlus text-center text-white text-md uppercase w-1/5 pr-16 ">
            Customer Name
          </h3>
          <h3 className="font-GentiumPlus text-center text-white text-md uppercase w-1/5 pl-9">
            Price
          </h3>
          <h3 className="font-GentiumPlus text-center text-white text-md uppercase w-1/5 pl-9">
            Date
          </h3>
          <h3 className="font-GentiumPlus text-white text-md uppercase w-1/5 pl-16">
            Status
          </h3>
        </div>
        <AdminProcessContainer />
      </div>
    </>
  );
}
