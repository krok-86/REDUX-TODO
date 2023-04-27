import "./Bottom.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveTodo } from "./store/todoSlice";

function Bottom() {
const [value, setValue] = useState("");
const todo = useSelector(state => state.todo.todo);
const dispatch = useDispatch();
const addTask = () => dispatch(saveTodo(value));
  
const handleClick = () => {
    if (value) {
      addTask();
      setValue("");
    } 
  };

  const handleEnter = (e) => {
    if (e.key == "Enter" && value) {
      addTask();
      setValue("");
    }
  };

  return (
    <div className="Bottom">
      <div className="InputTasks">
        <input
          className="InputBoard"
          type="text"
          placeholder="New task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
        />

        <div
          className="material-icons add"
          style={{ color:"#3e82c3" }}
          onClick={handleClick}
        >
          add_circle
        </div>
      </div>
    </div>
  );
}

export default Bottom;
