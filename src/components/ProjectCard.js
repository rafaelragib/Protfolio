import React from "react"
import "./ProjectCard.css"

const ProjectCard = (props) =>
(
    <div className="column">
    <div className="card">
      <h2>{props.name}</h2>
      <p>Some text</p>
      <p>Some text</p>
      <span className="badge">Java:85%</span>
      <span className="badge">JavaScript:30%</span>
    </div>
  </div>    
    
);

export default ProjectCard; 