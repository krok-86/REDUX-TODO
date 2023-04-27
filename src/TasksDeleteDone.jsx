
import './TasksDeleteAndDone.css';


function TasksDeleteDone({ deleteTodoDone }) {
  return (
    <button
      className="TasksDeleteAndDone"
      onClick={deleteTodoDone}
    >
      <div>Tasks Done</div>
      <div className="material-icons" style={{ color: "white" }}>delete</div>
    </button>
  );
}

export default TasksDeleteDone;
