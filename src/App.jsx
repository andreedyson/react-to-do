import { useState } from "react";
import "./index.css";
import ToDoList from ".//components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTaskHandler = (todo) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), task: todo, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#855afd]">
      <div className="p-8 bg-[#353535] text-center">
        <h1 className="mb-8 text-4xl font-bold text-white">To-Dos App</h1>
        <ToDoForm onAddTask={addTaskHandler} />
        <ToDoList
          tasks={todos}
          toggleCompleted={toggleComplete}
          deleteTasks={deleteTask}
        />
        <p className="mt-8 font-bold text-cyan-400">Created by Andre Edyson</p>
      </div>
    </div>
  );
};

export default App;
