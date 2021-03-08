import React from 'react'
import styled, { css } from "styled-components"
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { IoDocument } from "react-icons/io5";
import Particles from 'react-particles-js';



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
        <Particles params={{
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 96,
        "height": 30
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}}>

</Particles>

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
    font-size:2em`;

const H1= styled.div`
    font-size: 5em;`;
    

        