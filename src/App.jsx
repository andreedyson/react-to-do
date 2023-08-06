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
    <div className="p-8 bg-[#353535] mt-48 text-center">
      <h1 className="text-4xl text-white font-bold mb-8">To-Dos App</h1>
      <ToDoForm onAddTask={addTaskHandler} />
      <ToDoList
        tasks={todos}
        toggleCompleted={toggleComplete}
        deleteTasks={deleteTask}
      />
      <p className="text-cyan-400 font-bold mt-8">Created by Andre Edyson</p>
    </div>
  );
};

export default App;
