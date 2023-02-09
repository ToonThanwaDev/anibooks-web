import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as authApi from "../../apis/authApi";

const initialInput = {
  firstName: "",
  lastName: "",
  phone: "",
  address: ""
};

export default function PaymentForm() {
  const [input, setInput] = useState(initialInput);
  const [upload, setUpload] = useState(null);
  const navigate = useNavigate();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      console.log(upload);
      const fromData = new FormData();
      fromData.append("firstName", input.firstName);
      fromData.append("lastName", input.lastName);
      fromData.append("phone", input.phone);
      fromData.append("address", input.address);
      fromData.append("slipImage", upload);
      await authApi.infoPaymentUser(fromData);
      toast.success("payment success");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.err(err.response?.data.message);
    }
  };

  return (
    <form className="mt-10 flex flex-col space-y-4" onSubmit={handleSubmitForm}>
      <div>
        <label for="firstName" className="text-xs font-Brawler text-gray-500">
          First Name
        </label>
        <input
          type="name"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          value={input.firstName}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label for="lastName" className="text-xs font-Brawler text-gray-500">
          Last Name
        </label>
        <input
          type="name"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          value={input.lastName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="relative">
        <label for="telephone" className="text-xs font-Brawler text-gray-500">
          Tel.
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="087-xxx-xxxx"
          className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          value={input.phone}
          onChange={handleChangeInput}
        />
      </div>

      <div className="relative">
        <label for="address" className="text-xs font-Brawler text-gray-500">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
          value={input.address}
          onChange={handleChangeInput}
        />
      </div>

      <div className="mt-5">
        <label className="block">
          <span className="sr-only">Choose File</span>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={e => {
              setUpload(e.target.files[0]);
            }}
          />
        </label>
      </div>

      <p className="mt-10 text-center text-sm font-Brawler text-gray-500">
        By placing this order you agree to the{" "}
        <a
          href="#"
          className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
        >
          Terms and Conditions
        </a>
      </p>
      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center rounded bg-purple-600 hover:bg-purple-800  font-GentiumPlus py-2.5 px-4 text-base tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
      >
        Place Order
      </button>
    </form>
  );
}
