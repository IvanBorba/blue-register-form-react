import { LoginContainer } from "./styles";
import { useState } from "react";
import { MainContainer, StyledButton, StyledInput } from "../../styles";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "") {
      return toast.error("Email de usuário obrigatório");
    }

    if (password === "") {
      return toast.error("Senha de usuário obrigatório");
    }

    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:3333/auth/login", data)
      .then((res) => console.log(res));
  };

  return (
    <MainContainer>
      <LoginContainer>
        <StyledInput
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton onClick={handleLogin}>Enviar</StyledButton>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
