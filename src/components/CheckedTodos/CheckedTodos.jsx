import axios from "axios";
import { useEffect, useState } from "react";

const CheckedTodos = () => {
  const [favoriteTodos, setFavoriteTodos] = useState([]);

  const getFavoriteTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then((response) =>
        setFavoriteTodos(response.data.filter((todo) => todo.checked === true))
      );
  };  

  useEffect(() => {
    getFavoriteTodos();
  }, []);
  return (
    <div>
      <ul>
        {favoriteTodos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckedTodos;
