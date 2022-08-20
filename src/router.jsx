import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToDo from "./pages/ToDo";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ToDo />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
