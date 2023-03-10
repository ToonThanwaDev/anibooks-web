import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as adminApi from "../../apis/adminApi";

const initialInput = {
  name: "",
  writer: "",
  price: "",
  detail: ""
};

export default function EditProductForm() {
  const [input, setInput] = useState(initialInput);
  const [upload, setUpload] = useState(null);
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("writer", input.writer);
      formData.append("price", input.price);
      formData.append("detail", input.detail);
      formData.append("image", upload);
      await adminApi.editProduct(productId, formData);
      toast.success("Edit product success");
      navigate("/admin/product");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="mt-10 flex flex-col space-y-4" onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="productName" className="text-xs font-Brawler text-gray-500">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product Name"
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
            value={input.name}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label htmlFor="writer" className="text-xs font-Brawler text-gray-500">
            Writer
          </label>
          <input
            type="text"
            id="writer"
            name="writer"
            placeholder="Writer"
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
            value={input.writer}
            onChange={handleChangeInput}
          />
        </div>
        <div className="relative">
          <label htmlFor="price" className="text-xs font-Brawler text-gray-500">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="200.00"
            className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
            value={input.price}
            onChange={handleChangeInput}
          />
        </div>

        <div className="relative">
          <label htmlFor="detail" className="text-xs font-Brawler text-gray-500">
            Detail
          </label>
          <input
            type="text"
            id="detail"
            name="detail"
            placeholder="Short Story"
            className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
            value={input.detail}
            onChange={handleChangeInput}
          />
        </div>

        <div className="relative">
          <label className="block">
            <span className="sr-only">Choose File</span>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={(e) => {
                setUpload(e.target.files[0]);
              }}
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex w-full items-center justify-center rounded bg-purple-600 hover:bg-purple-800  font-GentiumPlus py-2.5 px-4 text-base tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
        >
          Confirm
        </button>
      </form>
    </>
  );
}
