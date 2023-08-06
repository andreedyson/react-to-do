import { useRef, useState } from "react";
import PropTypes from "prop-types";

const ToDoForm = ({ onAddTask }) => {
  const taskInputRef = useRef();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = taskInputRef.current.value;

    if (task.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);
    onAddTask(task);
    taskInputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          name="task"
          id="task"
          className="w-[280px] p-2 rounded-md focus:outline-0 focus-within:ring-4 focus-within:ring-purple-500"
          placeholder="Insert a new task here..."
          ref={taskInputRef}
          autoComplete="off"
        />
        <button className="bg-purple-800 text-white font-bold p-2 ml-2">
          Add task
        </button>
      </form>
      {error ? (
        <p className="text-lg text-red-600 font-bold mt-2">
          Please enter a task
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

ToDoForm.propTypes = {
  onAddTask: PropTypes.any,
};

export default ToDoForm;
