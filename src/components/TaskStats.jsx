import React from "react";
function TaskStats({
  totalTasks,
  completedTasks,
  pendingTasks
}) {
  return (
    <section className="stats">
      {/* Total Tasks */}
      <div className="stat-card total">
        <div className="stat-icon">
          📋
        </div>
        <div>
          <h3>
            Total Tasks
          </h3>
          <p>
            {totalTasks}
          </p>
        </div>
      </div>
      {/* Completed Tasks */}
      <div className="stat-card completed">
        <div className="stat-icon">
          ✅
        </div>
        <div>
          <h3>
            Completed
          </h3>
          <p>
            {completedTasks}
          </p>
        </div>
      </div>
      {/* Pending Tasks */}
      <div className="stat-card pending">
        <div className="stat-icon">
          ⏳
        </div>
        <div>
          <h3>
            Pending
          </h3>
          <p>
            {pendingTasks}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TaskStats;