import PropTypes from "prop-types";
import { HiTrash, HiCheck } from "react-icons/hi2";

const ToDoList = ({ tasks, toggleCompleted, deleteTasks }) => {
  return (
    <ul className="flex flex-col gap-4 mt-4 text-white font-medium">
      {tasks.map((todo) => (
        <li
          key={todo.id}
          className={`p-4 rounded-lg cursor-pointer ${
            todo.completed ? "bg-green-500" : " bg-purple-900"
          }`}
        >
          <div className="flex justify-between">
            <p>{todo.task}</p>
            <div className="flex items-center gap-2">
              <button>
                <HiTrash size={25} onClick={() => deleteTasks(todo.id)} />
              </button>
              <button>
                <HiCheck size={25} onClick={() => toggleCompleted(todo.id)} />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  tasks: PropTypes.any,
  toggleCompleted: PropTypes.any,
  deleteTasks: PropTypes.any,
};

export default ToDoList;
