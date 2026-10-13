import React from "react";
function Profile({ user }) {
  const { name, email, role } = user;
  return (
    <section className="welcome-section">
      <div className="welcome">
        <h2>
          Welcome back, {name || "User"} 👋
        </h2>
        <p>
          Stay organized and complete your tasks on time.
        </p>
      </div>
      <div className="profile-card">
        
        <div>
          <h3>
            {name || "Loading..."}
          </h3>
          <p>
            {email}
          </p>
          <span>
            {role}
          </span>
        </div>
      </div>
    </section>
  );
}
export default Profile;