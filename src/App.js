import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleContact = () => setContactOpen(!isContactOpen);
  const toggleLogin = () => setLoginOpen(!isLoginOpen);

  return (
    <div className="container">
      {/* Live Scrolling Lines at the Top */}
      {/* Top Bar with Buttons */}
      <div className="top-bar">
        <input type="text" placeholder="Search" class="search"></input>
        <button className="top-btn">Search</button>
        <button className="top-btn" onClick={toggleContact}>
          Contact
        </button>
        <button className="top-btn" onClick={toggleLogin}>
          Login
        </button>
      </div>
      <img
        src="https://www.igotskills.in/_next/image?url=%2Fassets%2Fpng%2Flogo.png&w=128&q=75"
        className="image2"
        alt="Logo"
      />
      <div className="ticker">
        <p>
          <img
            src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
            className="image"
            alt="React Logo"
          />
          New Challenge created in ReactJS Skill: Interactive Gantt Chart in
          React for Effective Task Management New Challenge created in NodeJS
          Skill: Build an Advanced URL Shortener app with Comprehensive
          Analytics, Custom Aliases, and Rate Limiting New Challenge created in
          ReactJS Skill: Build an Engaging Social Media Feed with Interactive
          Features
        </p>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Contact Us</h3>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: support@example.com</p>
            <p>Address: 123 Main St, Anytown, USA</p>
            <button className="close-btn" onClick={toggleContact}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <button className="close-btn" onClick={toggleLogin}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      <header className="header">
        <img
          src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Figs-assets%2Fuser%2Fprofile-photos%2F2_EClZbu2ewZ3rq2rrMQoP0JljR.png&w=1920&q=75"
          className="image1"
          alt="Profile"
        />
        <img
          src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Figs-assets%2Fuser%2Fprofile-photos%2F2_91Trg5LUwAdUT5AiqFvu8E0Lj.png&w=1920&q=75"
          class="image1"
        />
        <img
          src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Figs-assets%2Fuser%2Fprofile-photos%2F2_lcfBRjq94DKxlLEnWE6kcL1Qw.png&w=1920&q=75"
          class="image1"
        />
        <div>
          <h1>
            Build an Engaging Social <br />
            Media Feed with Interactive Features
          </h1>
        </div>
      </header>

      <main className="main-content">
        <section className="card">
          <img
            src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Figs-assets.s3.ap-south-1.amazonaws.com%2Fbadges%2FReact-2.png&w=1920&q=75"
            class="image3"
          />

          <p>Earn this task badge by completing the following task.</p>
          <div>
            <button>I'M TAKING THIS</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h>Let's Connect.</h>
        <img
          src="https://www.igotskills.in/_next/image?url=%2Fassets%2Fpng%2Fstar_shape.png&w=1920&q=75"
          class="image4"
        />
        <p1>
          <br />
          Reach out to us if you have more questions regarding I GOT SKILLS.
        </p1>
        <div>
          <input type="text" placeholder="Email address" class="search"></input>
          <button class="button">Subscribe</button>
          <p class="paragraph">@ copyright 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

