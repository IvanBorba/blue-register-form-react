import { HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <a onClick={() => navigate("/")}>To-Do</a>
      <a onClick={() => navigate("/login")}>Login</a>
      <a onClick={() => navigate("/register")}>Register</a>
    </HeaderContainer>
  );
};

export default Header;
