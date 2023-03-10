import { Link } from "react-router-dom";
import AdminProductContainer from "../../components/admin/AdminProductContainer";
import AdminHeader from "../../layouts/AdminHeader";
import Container from "../../layouts/Container";

export default function AdminProductPage() {
  return (
    <>
      <AdminHeader />
      <Container>
        <div className="container mx-auto px-4 vh-100">
          <div className="flex items-center justify-center my-6 py-4">
            <div className="flex justify-center pb-8 w-full">
              <h1 className="font-GentiumPlus text-4xl font-bold text-white mt-4">Product</h1>
            </div>
          </div>
          <Link
            to="/admin/add"
            className="text-white text-lg underline hover:bg-white/40 w-40 text-center font-GentiumPlus"
          >
            Add Product +
          </Link>
          <div className="flex justify-between mt-12 pb-5 border-b w-full">
            <div className="font-GentiumPlus text-white text-md uppercase ">Product ID</div>
            <div className="font-GentiumPlus text-white text-md uppercase ">Products</div>
            <div className="font-GentiumPlus text-center text-white text-md uppercase  ">Price</div>
            <div className="w-50 invisible">Date</div>
          </div>
          <Container>
            <AdminProductContainer />
          </Container>
        </div>
      </Container>
    </>
  );
}
