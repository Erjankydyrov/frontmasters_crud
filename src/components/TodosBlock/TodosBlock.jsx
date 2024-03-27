import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import "./TodosBlock.scss";
import axios from "axios";
import TodoList from "../TodoList/TodoList";
import CheckedTodos from "../CheckedTodos/CheckedTodos";

const TodosBlock = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then((response) => setTodos(response.data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="todos_block">
      <TodoForm callback={getTodos()} />
      <TodoList todos={todos} />
      <CheckedTodos />
    </div>
  );
};

export default TodosBlock;
