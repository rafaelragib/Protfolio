import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from './ProjectCard'
import "./Projects.css"

const API="https://api.github.com/users/rafaelragib/repos";
const specific=["AustPc-Portal","budget_app"];

const project_details = {
    name: null,
    description: null,
    svn_url: null,
    stargazers_count: null,
    languages_url: null,
    pushed_at: null,
  };

const Projects=() => {

    const [projectDetails,setProjectDetails]=useState([{}]);
    const [projectLanguage,setProjectLanguage]=useState([{}]);
    
    const fetchData= useCallback( async () =>
    {
    //const response= await axios.get(API);
    //const len=response.data.length; 
    
    let repoList=[];
    let languageList=[];
    //repoList = [...response.data.slice(0, len)];
    for(let repoName of specific)
    {
        const projects= await axios.get(`https://api.github.com/repos/rafaelragib/${repoName}`);
        const language=await axios.get(`https://api.github.com/repos/rafaelragib/${repoName}/languages`)
        repoList.push(projects.data);
        languageList.push(language.data);
    }

    
    //console.log(repoList);

    
    //repoList=[...response.data.slice(0, len)];
    //console.log(repoList);
    setProjectDetails(repoList);
    setProjectLanguage(languageList);
    console.log(languageList);

    },[specific]);

    useEffect(()=>{
        fetchData();
    },[fetchData]);
    
   
    //console.log(typeof projectDetails);
    return (  
        <div className="heading" id="projects">
        <h1 >
            Projects
        </h1>    
    <div className="row">
    {
        
        projectDetails.map((project,index) => (
            
           <ProjectCard key={index} name={project.name} desc={project.description} language={project.language}/>
               
        ))
    }
    </div>
    </div>
    );
};

export default Projects;