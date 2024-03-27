import "./EditTodoForm.scss";

const EditTodoForm = ({ id, title, desc }) => {
  return (
    <li className="edit_todo_item">
      <div>
        <div>
          <input type="text" defaultValue={title} />
          <textarea type="text" defaultValue={desc} />
        </div>
        <div>
          <button>Ok</button>
          <button>No edit</button>
        </div>
      </div>
    </li>
  );
};

export default EditTodoForm;
