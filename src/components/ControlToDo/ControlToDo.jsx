import { useSelector, useDispatch } from "react-redux";

import styles from "./ControlToDo.module.css";

import { deleteTodoAll, deleteTodoDone } from "../../store/todoSlice";

function ControlToDo({ doneTodos }) {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const removeTodoAll = () => dispatch(deleteTodoAll());
  const removeTodoDone = () => dispatch(deleteTodoDone([]));
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
        <div className="material-icons" style={{ color: "white" }}>
          delete
        </div>
      </button>
      <button onClick={removeTodoAll} className={styles.tasksDeleteAndDone}>
        Tasks
        <div className="material-icons" style={{ color: "white" }}>
          delete
        </div>
      </button>
    </header>
  );
}

export default ControlToDo;
