import { ToastContainer } from "react-toastify";

import Router from "./routes/Router";

export default function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose="1000" theme="dark" position="bottom-center" />
    </>
  );
}
