import { useSelector, useDispatch } from "react-redux";

import styles from "./ControlToDo.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteTodoAll, deleteTodoDone } from "../../store/todoSlice";

function ControlToDo({ doneTodos }) {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.todo);

  const removeTodoAll = () => dispatch(deleteTodoAll());
  const removeTodoDone = () => dispatch(deleteTodoDone());

  return (
    <header className={styles.controlToDo}>
      <div className={styles.badgeTaskCounter}>
        Tasks
        <div className={styles.countNumber}>{todo.length}</div>
      </div>
      <div className={styles.badgeTaskCounter}>
        TasksDone
        <div className={styles.countNumber}>{doneTodos}</div>
      </div>
      <button className={styles.tasksDeleteAndDone} onClick={removeTodoDone}>
        Tasks Done
        <DeleteIcon style={{ color: "white" }} />
      </button>
      <button onClick={removeTodoAll} className={styles.tasksDeleteAndDone}>
        Tasks
        <DeleteIcon style={{ color: "white" }} />
      </button>
    </header>
  );
}

export default ControlToDo;
