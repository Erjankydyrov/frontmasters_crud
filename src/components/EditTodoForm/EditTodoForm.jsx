import { useState } from "react";
import "./EditTodoForm.scss";
import axios from "axios";

const EditTodoForm = ({ id, title, desc, checked, setEditMod }) => {
  const [newTodo, setNewTodo] = useState({ title: "", desc: "" });

  const editTodo = (id) => {
    const data = {
      title: newTodo.title,
      desc: newTodo.desc,
      checked: checked,
    };
    axios
      .patch(`http://localhost:3000/todos/${id}`, data)
      .then(() => {
        setEditMod(null)
      });
  };

  return (
    <li className="edit_todo_item">
      <div className="todo_flex">
        <div className="edit_forms">
          <input
            type="text"
            defaultValue={title}
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
          <textarea
            type="text"
            defaultValue={desc}
            value={newTodo.desc}
            onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
          />
        </div>
        <div>
          <button onClick={() => editTodo(id)}>Ok</button>
          <button onClick={() => setEditMod(null)}>No edit</button>
        </div>
      </div>
    </li>
  );
};

export default EditTodoForm;
