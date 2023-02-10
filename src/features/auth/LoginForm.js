import { useState } from "react";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(email, password);
      toast.success("Login success");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmitForm}>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-white"
        >
          Email
        </label>
        <input
          type="email"
          className="block w-full px-4 py-2 mt-2 mb-5 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-white"
        >
          Password
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-10">
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-800 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
          Login
        </button>
      </div>
    </form>
  );
}
