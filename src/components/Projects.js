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

    const fetchData=    useCallback( async () =>
    {
    //const response= await axios.get(API);
    //const len=response.data.length; 
    
    let repoList=[];
    //repoList = [...response.data.slice(0, len)];
    for(let repoName of specific)
    {
        const projects= await axios.get(`https://api.github.com/repos/rafaelragib/${repoName}`);
        repoList.push(projects.data);
    }

    
    //console.log(repoList);

    
    //repoList=[...response.data.slice(0, len)];
    //console.log(repoList);
    setProjectDetails(repoList);
    },[specific]);

    useEffect(()=>{
        fetchData();
    },[fetchData]);
    
   
    //console.log(typeof projectDetails);
    return (  
        
    <div className="row">
    {
        
        projectDetails.map((project,index) => (
            
           <ProjectCard key={index} name={project.name}/>
               
        ))
    }
    </div>
    );
};

export default Projects;