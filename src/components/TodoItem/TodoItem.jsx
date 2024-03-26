import axios from "axios";
import "./TodoItem.scss";

const TodoItem = ({ id, title, desc, checked }) => {
  const deleteTodo = () => {
    axios.delete(`http://localhost:3000/todos/${id}`);
  };

  return (
    <li className="todo_item">
      <div className="todo_flex">
        <div>
          <input
            type="checkbox"
            defaultValue={checked}
            name={title.toLowerCase()}
            id={id}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div>
          <button onClick={() => deleteTodo()}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
