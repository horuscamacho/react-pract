import { ReactComponent as CheckSVG } from "./svg/check.svg";
import { ReactComponent as DeleteSVG } from "./svg/delete.svg";
import "./ToDoIcon.css";

const iconTypes = {
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
};

function ToDoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type} Icon-${color}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { ToDoIcon };
