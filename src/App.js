import { ToastContainer } from "react-toastify";
import "./App.css";
import Router from "./routes/Router";

export default function App() {
  return (
    <>
      <div className="black-background">
        <Router />
        <ToastContainer
          autoClose="1000"
          theme="dark"
          position="bottom-center"
        />
      </div>
    </>
  );
}
