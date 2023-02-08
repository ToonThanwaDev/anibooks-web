import "../components/Xmark.css";
import React from "react";
import Header from "../layouts/Header";
import CloseButton from "../components/CloseButton";
import DetailProduct from "../components/DatailProduct";
import Footer from "../layouts/Footer";

export default function DetailPage() {
  return (
    <>
      <Header />
      <div className="min-w-screen min-h-screen bg-[#121212] flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-gradient-to-tr from-[#9049FF]/60 to-[#5F0FDD]/60 shadow-2xl shadow-purple-500 p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <CloseButton />
          <DetailProduct />
        </div>
      </div>
      <Footer />
    </>
  );
}
