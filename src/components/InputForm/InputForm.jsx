import AddIcon from '@mui/icons-material/Add';

import { useState } from "react";
import { saveTodo } from "../../store/todoSlice";
import { useDispatch } from 'react-redux';

import styles from "./InputForm.module.css";


function InputForm() {

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const addTask = () => dispatch(saveTodo(value));

  const handleClick = () => {
    if (!value) { return };
    addTask();
    setValue("");
  };

  const handleEnter = (e) => {
    if (e.key !== "Enter" || !value) { return; };
    addTask();
    setValue("");
    
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
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default InputForm;
