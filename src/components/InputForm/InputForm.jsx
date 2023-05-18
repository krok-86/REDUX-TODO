import styles from "./InputForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveTodo } from "../../store/todoSlice";

import AddIcon from '@mui/icons-material/Add';

function InputForm() {
  const [value, setValue] = useState("");
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const addTask = () => dispatch(saveTodo(value));

  const handleClick = () => {
    if (value) {
      addTask();
      setValue("");
    }
  };

  const handleEnter = (e) => {
    if (e.key !== "Enter" && value) {
      addTask();
      setValue("");
    }
  };

  return (
    <div className={styles.inputForm}>
      <div className={styles.inputTasks}>
        <input
          className={styles.inputBoard}
          type="text"
          placeholder="New task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
        />

        <AddIcon
          className={styles.add}
          style={{}}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default InputForm;
