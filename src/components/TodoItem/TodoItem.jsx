import axios from "axios";
import "./TodoItem.scss";

const TodoItem = ({ id, title, desc, checked, setEditMod }) => {
  const deleteTodo = () => {
    axios.delete(`http://localhost:3000/todos/${id}`);
  };

  const checkedTodo = (id, newChecked) => {
    const data = {
      title: title,
      desc: desc,
      checked: newChecked,
    };

    axios.patch(`http://localhost:3000/todos/${id}`, data);
  };

  return (
    <li className="todo_item">
      <div className="todo_flex">
        <div>
          <input
            type="checkbox"
            defaultChecked={checked}
            name={title.toLowerCase()}
            id={id}
            onChange={(e) => checkedTodo(id, e.target.checked)}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div>
          <button onClick={() => deleteTodo()}>Delete</button>
          <button onClick={() => setEditMod(id)}>Edit</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
