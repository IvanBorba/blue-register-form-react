import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  min-width: 20rem;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
  padding: 2rem;
  background-color: #120d31;
  border-radius: 8px;
  box-shadow: 9px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledInput = styled.input`
  all: unset;
  border: 1px solid #111111;
  background-color: #d2d2d2;
  width: 16rem;
  height: 3rem;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 1.5rem;
`;

export const StyledButton = styled.button`
  border: 1px solid #12664f;
  background-color: #26c485;
  width: 16rem;
  height: 3rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 3px 5px 2px 0px rgba(0, 0, 0, 0.75);
`;
