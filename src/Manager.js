import React, { useState } from "react";
import "./Manager.css";
function Manager() {
  // 1. Object State
  const [task, setTask] = useState({
    name: ""
  });
  // Task Array
  const [tasks, setTasks] = useState([]);
  // 5. Counter
  const [count, setCount] = useState(0);
  // 6. Theme
  const [dark, setDark] = useState(false);
  // 7. Accordion
  const [open, setOpen] = useState(false);
  // 8. Modal
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // Form Handling
  function handleChange(e) {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }
  // Add Task
  function addTask(e) {
    e.preventDefault();
    if (task.name === "") {
      alert("Please enter a task");
      return;
    }
    const newTask = {
      id: Date.now(),
      name: task.name,
      completed: false
    };
    setTasks([...tasks, newTask]);
    // Update counter
    setCount(count + 1);
    // Clear input
    setTask({
      name: ""
    });
  }
  // 4. Change Completed / Pending
  function changeStatus(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed
            }
          : item
      )
    );
  }
  // Open Delete Modal
  function openDelete(id) {
    setDeleteId(id);
    setShowModal(true);
  }
  // Delete Task
  function deleteTask() {
    setTasks(
      tasks.filter((item) => item.id !== deleteId)
    );
    setCount(count - 1);
    setShowModal(false);
  }
  // 3. Filter Completed Tasks
  const completedTasks = tasks.filter(
    (item) => item.completed === true
  );
  return (
    <div className={dark ? "manager dark" : "manager"}>
      <h1>Task Manager</h1>
      {/* 6. Theme Button */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
      {/* 1. Form */}
      <div className="form-box">
        <h2>Add Task</h2>
        <form onSubmit={addTask}>
          <input
            type="text"
            name="name"
            placeholder="Enter task"
            value={task.name}
            onChange={handleChange}
          />

          <button type="submit"> Add Task</button>
        </form>
      </div>


      {/* 5. Counter */}
      <h2>Total Tasks: {count}</h2>
      {/* 2. Display All Tasks */}
      <h2>All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks added.</p>
      ) : (

        tasks.map((item) => (

          <div className="task-card" key={item.id}>
            <h3 className={item.completed ? "completed" : ""}>
              {item.name}
            </h3>

            <p>
              Status:{" "}
              {item.completed
                ? "Completed"
                : "Pending"}
            </p>
            {/* 4. Change Status */}
            <button
              onClick={() => changeStatus(item.id)}>
              {item.completed
                ? "Set Pending"
                : "Complete"}
            </button>

            {/* 8. Delete */}
            <button
              className="delete-btn"
              onClick={() => openDelete(item.id)}>
              Delete
            </button>
          </div>

        ))
      )}
      {/* 3. Completed Tasks */}
      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p>No completed tasks.</p>
      ) : (
        completedTasks.map((item) => (
          <p key={item.id}>✅ {item.name}</p>
        ))
      )}
      {/* 7. Accordion */}
      <div className="accordion">
        <h2 onClick={() => setOpen(!open)}>How to use this app? {open ? "👆" : "👇"}</h2>
        {open && (
          <div className="rules">
            <p>1. Enter a task.</p>
            <p>2. Click Add Task.</p>
            <p>3. Click Complete when finished.</p>
            <p>4. Click Delete to remove a task.</p>
          </div>
        )}
      </div>
      {/* 8. Delete Modal */}
      {showModal && (
        <div className="modal-bg">
          <div className="modal">
            <h2>Are you sure?</h2>
            <p>Do you want to delete this task?</p>
            <button onClick={deleteTask}>Delete</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Manager;