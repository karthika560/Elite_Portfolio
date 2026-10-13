import React from "react";
import TaskItem from "./TaskItem";
function TaskList({
  tasks,
  deleteTask,
  completeTask
}) {
  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;
  return (
    <section className="task-section">
      <div className="section-title">
        <div>
          <h2>
            My Tasks
          </h2>
          <p>
            You have {pendingTasks} pending task
            {pendingTasks !== 1 ? "s" : ""}.
          </p>
        </div>
        <span className="task-count">
          {tasks.length} Tasks
        </span>
      </div>
      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div>
              📝
            </div>
            <h3>
              No tasks available
            </h3>
            <p>
              Add a new task to get started.
            </p>
          </div>
        ) : (

          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default TaskList;