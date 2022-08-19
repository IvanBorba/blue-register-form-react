import {
  MainContainer,
  FormContainer,
  StyledInput,
  StyledButton,
} from "../../styles";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateUser = () => {
    if (name === "") {
      return toast.error("Nome de usuário obrigatório");
    }

    if (email === "") {
      return toast.error("Email de usuário obrigatório");
    }

    if (password === "") {
      return toast.error("Senha de usuário obrigatório");
    }

    if (password !== confirmPassword) {
      return toast.error("Senhas não coincidem");
    }

    const data = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:3333/users", data)
      .then((res) => console.log(res));
  };

  return (
    <MainContainer>
      <FormContainer>
        <StyledInput
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <StyledInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <StyledButton onClick={handleCreateUser}>Enviar</StyledButton>
      </FormContainer>
    </MainContainer>
  );
};

export default Register;
