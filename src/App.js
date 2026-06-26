import React from 'react';
import profilePic from './profile.jpeg';
import { FaGithub, FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="landing-container">
      <div className="left-side">
        <h1 className="landing-title">Welcome to my portfolio</h1>
        <p className="intro-text">
          I'm Narayanan.N-a developer who turns ideas into real, working products.<br />
          I am a passionate Electronics &amp; Communication Engineering student. <br />
          Experienced in building modern React web applications and IoT systems. <br />
          Let's build the future together.
        </p>
        <div className="cta-container">
          <Link to="/about" className="cta-btn primary">About Me</Link>
          <Link to="/projects" className="cta-btn secondary">My Projects</Link>
        </div>
      </div>
      <div className="right-side">
        <div className="image-wrapper">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>
        {/* Bottom-right: React */}
        <span className="animated-logo"><FaReact size={55} /></span>
        {/* Bottom-left: HTML5 */}
        <span className="animated-html-logo"><FaHtml5 size={55} /></span>
        {/* Above HTML: GitHub */}
        <span className="animated-github-logo"><FaGithub size={55} /></span>
        {/* Top-left: CSS3 */}
        <span className="animated-css-logo"><FaCss3Alt size={55} /></span>
        {/* Top-right: Python */}
        <span className="animated-python-logo"><FaPython size={55} /></span>
        {/* Mid-right: Git */}
        <span className="animated-git-logo"><FaGitAlt size={55} /></span>
        {/* Mid-left top: Bootstrap */}
        <span className="animated-bootstrap-logo"><FaBootstrap size={55} /></span>
      </div>
    </div>
  );
}

export default App;
