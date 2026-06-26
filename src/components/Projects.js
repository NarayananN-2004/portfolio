import "./Projects.css";
import blynk from "../TR.jpg";
import esp32 from "../image copy.png";
import matlab from "../image.png";
const projects = [
  {
    id: 1,
    title: "DEEPWELL HAZARDOUS GAS DETECTOR USING IOT",
    description: "This project proposes an IoT-based deep well hazardous gas detection system for real-time monitoring and early warning.",
    img: blynk,
    links: "https://github.com/NarayananN-2004/DEEP_WELL_HAZARD_GAS_DETECTION/tree/main"
  },
  {
    id: 2,
    title: "ESP32 entertainment Bot",
    description: "this is a desktop bot used for enterainment purpose with amazing features!",
    img: esp32,
    links: "https://github.com/NarayananN-2004/ESP32_Entertainment_BOT"
  },
  {
    id: 3,
    title: "MATLAB VOICE CONTROLLED BOT",
    description: "THIS CAR IS CONTROLLED USING THE VOICE COMMANDS THROUGH MATLAB!",
    img: matlab,
    links: "https://github.com/NarayananN-2004/MATLAB_CAR"
  }
];

const Projects = () => {
  return (
    <div id="main">
      <h1 id="header">My Projects</h1>
      <ul>

        {projects.map((project) => (
          <li key={project.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={project.img} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title.toUpperCase()}</h5>
                <p className="card-text">{project.description.toLowerCase()}</p>
                <a href={project.links} className="btn btn-primary">Project Link</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;