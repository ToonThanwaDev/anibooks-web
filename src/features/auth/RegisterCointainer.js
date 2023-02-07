import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import validateRegister from "../../validators/validateRegister";
import * as authApi from "../../apis/authApi";

const initialInput = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function RegisterContainer() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(initialInput);
  const navigate = useNavigate();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
        toast.success("register success");
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmitForm}>
      <div className="mb-2">
        <label
          for="username"
          className={`block text-sm font-semibold text-white`}
        >
          Username
        </label>
        <Input
          name="username"
          value={input.username}
          onChange={handleChangeInput}
          error={error.username}
        />
      </div>
      <div className="mb-2">
        <label for="email" className="block text-sm font-semibold text-white">
          Email
        </label>
        <Input
          name="email"
          value={input.email}
          onChange={handleChangeInput}
          error={error.email}
        />
      </div>
      <div className="mb-2">
        <label
          for="password"
          className="block text-sm font-semibold text-white"
        >
          Password
        </label>
        <Input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
        />
      </div>
      <div className="mb-2">
        <label
          for="confirmPassword"
          className="block text-sm font-semibold text-white"
        >
          Confirm Password
        </label>
        <Input
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
        />
      </div>
      <div className="mt-8">
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-800 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
}
