import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/register" element={<Register />} />
      <Route path="/to-do" />
    </Routes>
  );
};

export default Router;
