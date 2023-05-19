import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";
import "./ToDoItem.css";

function ToDoItem({ text, completed, onDelete, onComplete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { ToDoItem };
