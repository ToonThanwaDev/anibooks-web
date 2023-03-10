import EditProductForm from "../../components/admin/EditProductForm";
import AdminHeader from "../../layouts/AdminHeader";

export default function EditProduct() {
  return (
    <>
      <AdminHeader />
      <div className="relative mx-auto w-full bg-[#121212]">
        <div className="flex justify-center">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <div className="relative text-2xl font-Brawler text-white sm:text-3xl">
                Edit Product
              </div>

              <EditProductForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
