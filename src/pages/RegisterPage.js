import { Link } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import RegisterContainer from "../features/auth/RegisterCointainer";
import Container from "../layouts/Container";

export default function RegisterPage() {
  return (
    <>
      <Container>
        <div className="container mx-auto px-4">
          <div>
            <div className="flex justify-center pt-5">
              <CloseButton />
              <Link to="/">
                <h3 className="text-4xl font-bold font-Brawler text-purple-600">
                  CREATE AN ACCOUNT
                </h3>
              </Link>
            </div>
            <hr className="border-[#9049FF] mt-5" />
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#121212]">
              <div className="w-full px-6 py-4 overflow-hidden bg-gradient-to-tr from-[#9049FF] to-[#5F0FDD] sm:max-w-md sm:rounded-lg shadow-xl shadow-[#9049FF]/70">
                <RegisterContainer />
                <div className="flex items-center justify-center mt-4">
                  <Link
                    className="text-sm text-white underline hover:text-white/50"
                    to="/login"
                  >
                    Already registered?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
