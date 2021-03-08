import React from 'react'
import styled, { css } from "styled-components"
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { IoDocument } from "react-icons/io5";
import Particles from 'react-particles-js';
import {particle_settings} from './particle'


const Header= () =>
(
    <Main id="header">
        <Container>
                <Columns>
                    <Column>
                        <H1>Ragib Un Nur</H1>
                    <H2>Tech Enthusiastic | Computer Science Engineer | Problem Solver</H2>
                    </Column>
                    <Icons>
                    <Icon href="https://github.com/rafaelragib">
                        <VscGithub  size={60} />
                    </Icon>
                    <Icon href="https://github.com/https://www.linkedin.com/in/ragibunnur/">
                        <FaLinkedin size={60} />
                    </Icon>
                </Icons>
                <ResumeButton>
                <IoDocument size={30}/>
                Resume
                </ResumeButton>
                
                </Columns>
            </Container>
    <Particles params={particle_settings}/>
    </Main>
    
);



export default Header;

const ResumeButton = styled.div`
margin-top:20px;`;

const Icons = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;`;

const Icon = styled.a `
    color:white;    
    width:70px;`;


const Main = styled.section `
    background-color: #454545;
    color: #fff;`;

const Container=styled.div `
    
    margin:9rem 0 0 20rem;
    position: absolute;
    width: auto;`;
    
const Columns= styled.div`
    flex-grow: 1;
    position: relative;
    width: auto;
    
    text-align: center!important;`;

const Column= styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    `;

const H2= styled.div`
    margin-top: .03em;
    font-size:2vw`;

const H1= styled.div`
    font-size: 5vw;`;
    

        