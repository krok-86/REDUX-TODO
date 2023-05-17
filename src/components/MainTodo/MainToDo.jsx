import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./MainToDo.module.css";
import { useSelector } from "react-redux";
import Bottom from "./Bottom";
import ControlToDo from './../ControlToDo/ControlToDo';
import TaskListItem from './../../TaskListItem/TaskListItem';

const MainToDo = () => {
  const [todoDone, setTodoDone] = useState(0);
  const todo = useSelector((state) => state.todo.todo);

  useEffect(() => {
    countTaskDone();
  }, [todo]);

  const countTaskDone = () => {
    const newTodoDone = todo.filter((item) => item.status);
    setTodoDone(newTodoDone.length);
  };

  const editTodo = (id, title) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
    setTodo(newTodo);
  };

  return (
    <div className={styles.mainToDo}>
      <ControlToDo todoDone={todoDone} />
      <div className={styles.containerStrings}>
        {todo.map((item) => (
          <TaskListItem todo={item} editTodo={editTodo} key={uuidv4()} />
        ))}
      </div>
      <div className={styles.containerBottom}>
        <Bottom />
      </div>
    </div>
  );
};

export default MainToDo;
