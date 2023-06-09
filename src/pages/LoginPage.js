import { Link } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import LoginForm from "../features/auth/LoginForm";
import Container from "../layouts/Container";

export default function LoginPage() {
  return (
    <>
      <Container>
        <div className="container mx-auto px-4">
          <div>
            <CloseButton />
            <div className="flex justify-center pt-5">
              <Link to="/">
                <h3 className="text-4xl font-bold font-Brawler text-purple-600">
                  LOGIN
                </h3>
              </Link>
            </div>
            <hr className="border-[#9049FF] mt-5" />
          </div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#121212]">
            <div className="w-full px-6 py-4 overflow-hidden bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] sm:max-w-md sm:rounded-lg shadow-xl shadow-[#9049FF]/70">
              <LoginForm />
              <p className="mt-8 text-xs font-light text-center text-white">
                Don't have an account?
                <Link
                  to="/register"
                  className="font-medium text-red-400 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
