import Router from "./router";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Router />
    </>
  );
};

export default App;
