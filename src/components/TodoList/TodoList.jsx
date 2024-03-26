import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  return (
    <div className='todo_list'>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            checked={todo.checked}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
