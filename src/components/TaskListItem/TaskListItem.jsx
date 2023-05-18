import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, changeStatus, editTodo } from "../../store/todoSlice";

import styles from "./TaskListItem.module.css";

const TaskListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const delTask = () => dispatch(deleteTodo({ id: todo.id }));
  const changeTodo = () => dispatch(changeStatus({ id: todo.id }));
  const correctTodo = () =>
    dispatch(editTodo({ title: inputEdit, id: todo.id }));
  const [isEdit, setIsEdit] = useState(false);
  const [inputEdit, setInputEdit] = useState(todo.title);

  const handleEnter = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    correctTodo();
  };

  const handleChange = (e) => {
    setInputEdit(e.target.value);
  };

  const handleStatus = () => {
    changeTodo();
  };

  return (
    <div className={styles.taskListItem}>
      <div
        className="material-icons circle"
        style={todo.status ? { color: "#42b883" } : { color: "#9c9692" }}
        onClick={handleStatus}
      >
        check_circle
      </div>
      <>
        {isEdit ? (
          <div>
            <input
              className={styles.inputString}
              type="text"
              placeholder="edit task"
              value={inputEdit}
              onKeyUp={(e) => handleEnter(e)}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        ) : (
          <div className="taskString-title" onClick={() => setIsEdit(true)}>
            {todo.title}
          </div>
        )}
      </>
      <div className="delete">
        <div
          className="material-icons del"
          style={{ color: "#F65050" }}
          onClick={delTask}
        >
          delete
        </div>
      </div>
    </div>
  );
};

export default TaskListItem;
