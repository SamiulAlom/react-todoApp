import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const taskItem = {
        id: new Date().getTime(),
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, taskItem]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>Task List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span>{task.description}</span>
            <div className="task-buttons">
              <button
                className="complete-button"
                onClick={() => toggleTaskComplete(task.id)}
              >
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                className="delete-button"
                onClick={() => removeTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
