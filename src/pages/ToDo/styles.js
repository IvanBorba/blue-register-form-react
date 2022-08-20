import styled from "styled-components";

export const ToDoContainer = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 8rem;
  gap: 4rem;

  h1 {
    color: white;
    font-family: Helvetica, sans-serif;
  }
`;

export const NewTodoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const TodoList = styled.ul`
  color: white;
  font-size: 32px;
`;
