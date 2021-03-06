import React from 'react'
import styled, { css } from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
const NavBar =() =>
(
    <Nav>
        <Anchor>
        <Link
            activeClass="active"
            to="header"
            smooth={true}
            offset={-70}
            duration={500}>Projects
        </Link>
        </Anchor>
        <Anchor>Resume</Anchor>
        <Anchor>
        <Link
            activeClass="active"
            to="aboutme"
            smooth={true}
            offset={-70}
            duration={500}>
        </Link>About</Anchor>
        <Anchor>Skills</Anchor>
    </Nav>
);

export default NavBar;
const Nav= styled.div`
    background-color: #333;
    overflow: hidden;
    position: sticky;
    top: 0;`;
const Anchor= styled.div`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 32px;
    text-decoration: none;
    font-size: 17px;`;
    
    /*.topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      topnav a.active {
        background-color: #4CAF50;
        color: white;
      }
      
      
    */