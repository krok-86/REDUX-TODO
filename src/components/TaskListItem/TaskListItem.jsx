import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, changeStatus, editTodo } from "../../store/todoSlice";

import styles from "./TaskListItem.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [inputEdit, setInputEdit] = useState(todo.title);

  const delTask = () => dispatch(deleteTodo({ id: todo.id }));
  const changeTodo = () => dispatch(changeStatus({ id: todo.id }));
  const correctTodo = () =>
    dispatch(editTodo({ title: inputEdit, id: todo.id }));

  const handleEnter = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    correctTodo();
    setIsEdit(false);
  };

  const handleStatus = () => {
    changeTodo();
  };

  return (
    <div className={styles.taskListItem}>
      <CheckCircleOutlineIcon
        className={styles.circle}
        style={todo.status ? { color: "#42b883" } : { color: "#9c9692" }}
        onClick={handleStatus}
      />
      <>
        {isEdit ? (
          <div>
            <input
              className={styles.inputString}
              type="text"
              placeholder="edit task"
              value={inputEdit}
              onKeyUp={(e) => handleEnter(e)}
              onChange={(e) => setInputEdit(e.target.value)}
            />
          </div>
        ) : (
          <div className="taskString-title" onClick={() => setIsEdit(true)}>
            {todo.title}
          </div>
        )}
      </>
      <div>
        <DeleteIcon
          className={styles.del}
          style={{ color: "#F65050" }}
          onClick={delTask}
        />
      </div>
    </div>
  );
};

export default TaskListItem;
