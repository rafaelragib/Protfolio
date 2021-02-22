import React from 'react'
import styled, { css } from "styled-components";

const NavBar =() =>
(
    <Nav>
        <Anchor>Projects</Anchor>
        <Anchor>Resume</Anchor>
        <Anchor>About</Anchor>
        <Anchor>Skills</Anchor>
    </Nav>
);

export default NavBar;
const Nav= styled.div`
    background-color: #333;
    overflow: hidden;
    position: sticky;
    top: 0;`;
const Anchor= styled.a`
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