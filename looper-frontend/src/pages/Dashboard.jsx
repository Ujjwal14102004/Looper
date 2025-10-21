import React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Here you can manage your tasks, view stats, and stay productive!</p>
      </header>

      <section className="dashboard-cards">
        <div className="card">
          <h2>Tasks</h2>
          <p>12 Pending</p>
        </div>
        <div className="card">
          <h2>Projects</h2>
          <p>5 Active</p>
        </div>
        <div className="card">
          <h2>Messages</h2>
          <p>8 New</p>
        </div>
        <div className="card">
          <h2>Notifications</h2>
          <p>3 Unread</p>
        </div>
      </section>

      <section className="dashboard-footer">
        <p>© 2025 Looper App. All rights reserved.</p>
      </section>
    </div>
  );
};

export default Dashboard;
