import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://supreme-trout-vjjx555g67xcjj-3001.app.github.dev/todos"; // Replace with your backend URL

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Fetch todos when the app loads
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  // Add a new todo
  const addTodo = () => {
    if (task.trim() === "") return;
    axios.post(API_URL, { task, done: false })
      .then((res) => setTodos([...todos, res.data]))
      .catch((err) => console.error("Error adding todo:", err));
    setTask("");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>DevOps To-Do List</h2>
      <input 
        type="text" 
        placeholder="Add a task..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

