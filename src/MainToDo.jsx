import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./MainToDo.css";
import { useSelector } from "react-redux";
import Header from "./Header";
import TaskString from "./TaskString";
import Bottom from "./Bottom";

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
    <div className="MainToDo">
      <Header todoDone={todoDone} />
      <div className="ContainerStrings">
        {todo.map((item) => (
          <TaskString todo={item} editTodo={editTodo} key={uuidv4()} />
        ))}
      </div>
      <div className="ContainerBottom">
        <Bottom />
      </div>
    </div>
  );
};

export default MainToDo;
