import AdminProcessContainer from "../../components/admin/AdminProcessContainer";
import AdminHeader from "../../layouts/AdminHeader";
import Container from "../../layouts/Container";

export default function AdminPage() {
  return (
    <>
      <Container>
        <AdminHeader />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center my-6 py-4">
            <div className="flex justify-center border-b pb-8 w-full">
              <h1 className="font-GentiumPlus text-4xl font-bold text-white">
                Confirm Order
              </h1>
            </div>
          </div>
          <div className="flex mt-10 mb-5 ">
            <h3 className="font-GentiumPlus text-white text-md uppercase basis-20 ">
              Order
            </h3>
            <h3 className="font-GentiumPlus text-white text-md uppercase grow text-center">
              Slip URL
            </h3>

            <h3 className="font-GentiumPlus text-white text-md uppercase basis-96 pl-4">
              Customer Name
            </h3>
          </div>
          <AdminProcessContainer />
        </div>
      </Container>
    </>
  );
}
