import {React,useState } from "react";
function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const handleAddTask = () => {
    addTask(taskName, priority);
    setTaskName("");
    setPriority("Medium");
  };
  return (

    <section className="add-task-card">
      <div className="section-title">
        <div>
          <h2>
            Add New Task
          </h2>
          <p>
            Create a new task and select its priority.
          </p>
        </div>
      </div>
      <div className="task-form">
        {/* Task Name */}
        <input
          type="text"
          placeholder="Enter task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        {/* Priority */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">
            High Priority
          </option>
          <option value="Medium">
            Medium Priority
          </option>

          <option value="Low">
            Low Priority
          </option>
        </select>

        {/* Add Button */}
        <button
          className="add-button"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

    </section>

  );
}

export default AddTask;