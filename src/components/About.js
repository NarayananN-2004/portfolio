import React from 'react';
import './About.css'; // ← add this at the top of About.js
const About = () => {
  return (
    <>
      <div className="about-header">

        <div className="about">
          <h1>About Me</h1>
          <h2>An Electronics and Communication Engineering student with hands-on experience in React web development, IoT, robotics, and embedded systems. Skilled in building responsive web applications as well as working with microcontrollers like ESP32, Arduino, and STM32 — bringing together software development and hardware integration skills.</h2>
        </div>

        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>
              <button type="button" className="react">React Web Development</button>
            </li>
            <li>
              <button type="button" className="iot">IoT (Internet of Things)</button>
            </li>
            <li>
              <button type="button" className="robotics">Robotics</button>
            </li>
            <li>
              <button type="button" className="embedded">Embedded Systems</button>
            </li>
            <li>
              <button type="button" className="microcontrollers">Microcontrollers (ESP32, Arduino, STM32)</button>
            </li>
          </ul>
        </div>
        <div className="Internships">
          <h1>Internships</h1>
          <h2>I have completed internship at NIT TRICHY, where I gained practical experience in software development and hardware integration. During these internship, I worked on projects that involved developing IoT solutions that integrated sensors and microcontrollers for real-time data monitoring and control.</h2>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <h2>As a student, I have completed various projects that demonstrate my skills in both software and hardware domains. I have built responsive web applications using React,& learning to integrating APIs and managing state effectively. In the realm of IoT and embedded systems, I have developed projects that involve sensor data collection, real-time monitoring, and control using microcontrollers like ESP32 and Arduino uno. My experience also extends to robotics club</h2>
        </div>
      </div>
    </>

  );
};

export default About;