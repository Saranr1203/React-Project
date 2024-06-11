import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="abt">
        <h1>About</h1>
      </div>
      <div className="hero-section">
        <h2>Welcome to Ticks: Simplifying Task Management</h2>
        <p>
          At Ticks, we understand the chaos that can come with managing tasks,
          projects, and deadlines. That's why we've created a platform dedicated
          to simplifying your task management experience. Whether you're a busy
          professional, a student juggling assignments, or a team leader
          coordinating projects, Ticks is here to streamline your workflow and
          boost your productivity.
        </p>
      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To empower individuals and teams to accomplish more by providing an
          intuitive and efficient task management solution. We believe that by
          eliminating the clutter and confusion often associated with task
          organization, we can help you focus on what truly matters - getting
          things done.
          <ul>
            <li>
              <strong>User-Friendly Interface:</strong> We've designed Ticks
              with simplicity in mind. Our clean and intuitive interface ensures
              that you can start managing your tasks with ease, without the need
              for extensive training or tutorials.
            </li>
            <li>
              <strong>Flexible Features:</strong> Ticks offers a variety of
              customizable features to suit your preferred workflow. With
              options for task categorization, priority settings, due dates, and
              more, you have the flexibility to organize your tasks in a way
              that works best for you.
            </li>
            <li>
              <strong>Collaborative Tools:</strong> Collaboration is key to
              success, which is why Ticks includes robust tools for team
              collaboration. From shared task lists and real-time updates to
              comments and file attachments, Ticks makes it easy for teams to
              stay connected and work together seamlessly.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
