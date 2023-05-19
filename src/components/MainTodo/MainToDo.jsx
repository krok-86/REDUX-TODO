import { useEffect } from "react";//зачем он нужен?
import { useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import styles from "./MainToDo.module.css";

import InputForm from "./../InputForm/InputForm";
import ControlToDo from './../ControlToDo/ControlToDo';
import TaskListItem from './../TaskListItem/TaskListItem';

const MainToDo = () => {

  const todo = useSelector((state) => state.todo.todo);//?
  const doneTodos = todo.filter((item) => item.status).length;

  useEffect(() => {//?
    countTaskDone();
  }, [todo]);

  const countTaskDone = () => {
    todo.filter((item) => item.status);
  };

  return (
    <div className={styles.mainToDo}>
      <ControlToDo doneTodos={doneTodos} />
      <div className={styles.containerStrings}>
        {todo.map((item) => (
          <TaskListItem todo={item} key={item.id} />
        ))}
      </div>
      <div className={styles.containerBottom}>
        <InputForm />
      </div>
    </div>
  );
};

export default MainToDo;
