import React from "react";
function TaskItem({
  task,
  deleteTask,
  completeTask
})
 {
  const {
    id,
    name,
    priority,
    completed
  } = task;
  // Decide priority color
  const getPriorityClass = () => {
    if (priority === "High") {
      return "high";
    } 
    else if (priority === "Medium") {
      return "medium";
    } 
    else {
      return "low";
    }
  };
  return (
    <div
      className={
        completed
          ? "task-item completed-task"
          : "task-item"
      }
    >
      {/* Left Side */}
      <div className="task-left">
        {/* Complete Button */}

        <button
          className={
            completed
              ? "check-button checked"
              : "check-button"
          }
          onClick={() => completeTask(id)}
        >
          {completed ? "✓" : ""}
        </button>

        {/* Task Information */}
        <div className="task-details">
          <h3>
            {name}
          </h3>
          <span
            className={`priority ${getPriorityClass()}`}
          >
            {priority} Priority
          </span>
        </div>
      </div>
      {/* Right Side */}
      <div className="task-actions">
        {completed && (
          <span className="completed-label">
            Completed
          </span>
        )}
        <button
  className="delete-button"
  onClick={() => deleteTask(id)}
>
  Delete
</button>
      </div>
    </div>
  );
}

export default TaskItem;