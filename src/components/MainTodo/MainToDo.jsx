import { useState, useEffect } from "react";//убрать state
import { v4 as uuidv4 } from "uuid";
import styles from "./MainToDo.module.css";
import { useSelector } from "react-redux";
import InputForm from "./../InputForm/InputForm";
import ControlToDo from './../ControlToDo/ControlToDo';
import TaskListItem from './../TaskListItem/TaskListItem';

const MainToDo = () => {
  // const [todoDone, setTodoDone] = useState(0);
  const todo = useSelector((state) => state.todo.todo);
  const doneTodos = todo.filter((item) => item.status).length;

  useEffect(() => {
    countTaskDone();
  }, [todo]);

  const countTaskDone = () => {
    const newTodoDone = todo.filter((item) => item.status);
  };

  const editTodo = (id, title) => {
    todo.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
    // newTodo;
  };

  return (
     <div className={styles.mainToDo}>
       <ControlToDo doneTodos={doneTodos} />
       <div className={styles.containerStrings}>
         {todo.map((item) => ( 
          <TaskListItem todo={item} editTodo={editTodo} key={uuidv4()} />
       ))}
       </div>
      <div className={styles.containerBottom}>
        <InputForm />
      </div>
     </div> 
  );
};

export default MainToDo;
