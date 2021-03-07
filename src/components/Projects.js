import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";


const API="https://api.github.com/users/rafaelragib/repos";


const project_details = {
    name: null,
    description: null,
    svn_url: null,
    stargazers_count: null,
    languages_url: null,
    pushed_at: null,
  };

const Projects=() => {

const [projectDetails,setProjectDetails]=useState([]);

const fetchData= async () =>
{
    const response= await axios.get(API);
    const len=response.data.length; 
    let specific=["AustPc-Portal","budget_app"];
    let repoList=[];
    for(let repoName of specific)
    {
        const projects= await axios.get(`https://api.github.com/repos/rafaelragib/${repoName}`);
        repoList.push(projects.data);
    }

    
    //console.log(response);

    
    //repoList=[...response.data.slice(0, len)];
    //console.log(repoList);
    setProjectDetails(repoList);
}

    useEffect(()=>{
        fetchData();
    },[fetchData]);
    
   
    //console.log(typeof projectDetails);
    return (  
        
    <div>
    {
        
        projectDetails.map((project,index) => (
            
            <div>
               {index} 
            </div>
        ))
    }
    </div>
    );
};

export default Projects;