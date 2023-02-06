export default function LoginForm() {
  return (
    <form className="mt-6">
      <div className="mb-2">
        <label for="email" className="block text-sm font-semibold text-white">
          Email
        </label>
        <input
          type="email"
          className="block w-full px-4 py-2 mt-2 mb-5 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="mb-2">
        <label
          for="password"
          className="block text-sm font-semibold text-white"
        >
          Password
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
