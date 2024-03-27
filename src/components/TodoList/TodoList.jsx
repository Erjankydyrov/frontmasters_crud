import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";
import EditTodoForm from "../EditTodoForm/EditTodoForm";

const TodoList = ({ todos }) => {
  const [editMod, setEditMod] = useState(null);

  return (
    <div className="todo_list">
      <ul>
        {todos.map((todo) =>
          editMod === todo.id ? (
            <EditTodoForm
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              checked={todo.checked}
              setEditMod={setEditMod}
            />
          ) : (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              checked={todo.checked}
              setEditMod={setEditMod}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
