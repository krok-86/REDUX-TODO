import styles from"./App.module.css";
import MainToDo from '../MainTodo/MainToDo';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.title}>React ToDo List</div>
      <MainToDo />
    </div>
  );
}

export default App;
