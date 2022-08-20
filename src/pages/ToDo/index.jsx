import { ToDoContainer, NewTodoContainer, TodoList } from "./styles";
import { StyledInput, StyledButton } from "../../styles";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ToDo = () => {
  const [todoList, setTodoList] = useState(["Tomar banho"]);
  const [todo, setTodo] = useState("");

  const handleNewTodo = () => {
    if (todo === "") {
      return toast.error("Adicione um valor no input");
    }

    setTodoList([...todoList, todo]);
  };

  return (
    <ToDoContainer>
      <h1>To-Do List</h1>
      <NewTodoContainer>
        <StyledInput
          placeholder="To-Do"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <StyledButton onClick={handleNewTodo}>Adicionar</StyledButton>
      </NewTodoContainer>
      <TodoList>
        {todoList.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </TodoList>
    </ToDoContainer>
  );
};

export default ToDo;
