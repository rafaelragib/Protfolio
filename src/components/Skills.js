import React from "react"
import {AiFillHtml5} from "react-icons/ai"
import "./Skills.css"
import ProgressBar from "./ProgressBar"

const Skills = ()=>
(
    <div className="heading" id="skills">
    <h1 >
        Skills
    </h1>
    <ProgressBar Name="C++" percent="70"/>
    <ProgressBar Name="Java" percent="40"/>
    <ProgressBar Name="JavaScript" percent="60"/>
    <ProgressBar Name="Python" percent="60"/>
    <ProgressBar Name="SQL" percent="70"/>



  </div>
  
)


export default Skills;
