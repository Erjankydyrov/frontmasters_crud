import axios from "axios";
import "./TodoForm.scss";
import { useState } from "react";

const TodoForm = ({ callback }) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const postTodo = () => {
    const data = {
      title: todo.title,
      desc: todo.desc,
      checked: false,
    };
    axios.post("http://localhost:3000/todos", data).then(() => {
      setTodo({ title: "", desc: "" });
      callback();
    });
  };

  return (
    <div className="todo_form">
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <textarea
        type="text"
        value={todo.desc}
        onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
      />
      <button onClick={() => postTodo()}>Submit</button>
    </div>
  );
};

export default TodoForm;
