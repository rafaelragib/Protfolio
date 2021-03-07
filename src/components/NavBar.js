import React from 'react'
import styled, { css } from "styled-components";
import './NavBar.css'
import { Link, animateScroll as scroll } from "react-scroll";
const NavBar =() =>
(
    <div className="nav">
        
        <Link
            className="links"
            to="header"
            smooth={true}
            offset={-70}
            duration={500}>Projects
        </Link>
        <Link
          className="links"
            to="aboutMe"
            smooth={true}
            offset={-70}
            duration={500}>
        About
        </Link>
        <Link
          className="links"
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}>
        Project
        </Link>
        <Link
          className="links"
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}>
        Skills
        </Link>
        <Link
          className="links"
            to="contacts"
            smooth={true}
            offset={-70}
            duration={500}>
        Contact
        </Link>
        
    </div>
);

export default NavBar;
/*const Nav= styled.div`
    background-color: #333;
    overflow: hidden;
    position: sticky;
    top: 0;
    `;
    */
/*const Anchor= styled.a`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 32px;
    text-decoration:none;
    font-size: 17px;
    &:hover  {
      background-color: #ddd;
      color: black;
    }`;
    */
/*const LinkStyle= {
    float: "left",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 32px",
    textDecoration:"none",
    fontSize: "17px"
    /*&:hover  {
      background-color: #ddd;
      color: black;
   
   };
*/    
    /*${Anchor}
      topnav a.active {
        background-color: #4CAF50;
        color: white;
      }
      
      
    */