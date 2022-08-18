import {
  MainContainer,
  FormContainer,
  StyledInput,
  StyledButton,
} from "./styles";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");

  const handleCreateUser = () => {
    // Fazer a requisição de criação de user
  };

  return (
    <MainContainer>
      <FormContainer onSubmit={handleCreateUser}>
        <StyledInput value={name} onChange={(e) => setName(e.target.value)} />
        <StyledInput />
        <StyledInput />
        <StyledInput />
        <StyledButton type="submit">Enviar</StyledButton>
      </FormContainer>
    </MainContainer>
  );
};

export default App;
