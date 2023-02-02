import { Link } from "react-router-dom";
import Container from "../layouts/Container";

export default function RegisterPage() {
  return (
    <>
      <Container>
        <div class="container mx-auto px-4">
          <div>
            <div className="flex justify-center pt-5">
              <Link to="/">
                <h3 className="text-4xl font-bold font-Brawler text-purple-600">
                  CREATE AN ACCOUNT
                </h3>
              </Link>
            </div>
            <hr className="border-[#9049FF] mt-5" />
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#121212]">
              <div className="w-full px-6 py-4 overflow-hidden bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] sm:max-w-md sm:rounded-lg shadow-xl shadow-[#9049FF]/70">
                <form>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white undefined"
                    >
                      Username
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="text"
                        name="name"
                        className="block w-full mt-1 border-gray-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white undefined"
                    >
                      Email
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="email"
                        name="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-white undefined"
                    >
                      Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password_confirmation"
                      className="block text-sm font-medium text-white undefined"
                    >
                      Confirm Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password_confirmation"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-4">
                    <Link
                      className="text-sm text-white underline hover:text-white/50"
                      to="/login"
                    >
                      Already registered?
                    </Link>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border rounded-lg hover:border-gray-500 hover:text-white/50 false"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
