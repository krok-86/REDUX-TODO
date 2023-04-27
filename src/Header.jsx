import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAll } from "./store/todoSlice";
import { deleteTodoDone } from "./store/todoSlice";

function Header({ todoDone }) {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const removeTodoAll = () => dispatch(deleteTodoAll());
  const removeTodoDone = () => dispatch(deleteTodoDone([]));
  return (
    <header className="Header">
      <div className="BadgeTaskCounter">
        Tasks
        <div className="CountNumber">{todo.length}</div>
      </div>
      <div className="BadgeTaskCounter">
        TasksDone
        <div className="CountNumber">{todoDone}</div>
      </div>
      <button className="TasksDeleteAndDone" onClick={removeTodoDone}>
        Tasks Done
        <div className="material-icons" style={{ color: "white" }}>
          delete
        </div>
      </button>
      <button onClick={removeTodoAll} className="TasksDeleteAndDone">
        Tasks
        <div className="material-icons" style={{ color: "white" }}>
          delete
        </div>
      </button>
    </header>
  );
}

export default Header;
