import AddProductForm from "../../components/admin/AddProductForm";
import AdminHeader from "../../layouts/AdminHeader";

export default function AddProduct() {
  return (
    <>
      <AdminHeader />
      <div className="relative mx-auto w-full bg-[#121212]">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <div className="relative text-2xl font-Brawler text-white sm:text-3xl">
                Add Product
              </div>

              <AddProductForm />
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div>
              <img
                src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675403313/personal%20project/Admin/Jujutsu_3_1_r4hfik.jpg"
                alt="background"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] stroke-[#5516B8] opacity-90"></div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161114/personal%20project/Products/Death_Note_no.6_s0hwwh.jpg"
                  className="w-[350px] h-[450px]"
                  alt="slip"
                />
              </div>
              <div className="mt-5 flex justify-center">
                <label className="block">
                  <span className="sr-only">Choose File</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
