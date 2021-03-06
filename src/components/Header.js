import React from 'react'
import styled, { css } from "styled-components"
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';





const Header= () =>
(
    <Main id="header">
        <SubMain>
            <Container>
                <Columns>
                    <Column>
                        <H1>Ragib Un Nur</H1>
                        <H2>CSE Graduate</H2>
                    </Column>
                </Columns>
                <Icons>
                    <Icon href="https://github.com/rafaelragib">
                        <VscGithub  size={60} />
                    </Icon>
                    <Icon href="https://github.com/https://www.linkedin.com/in/ragibunnur/">
                        <FaLinkedin size={60} />
                    </Icon>
                </Icons>
            </Container>
        </SubMain>
    </Main>
    
);



export default Header;

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

const SubMain= styled.div `
    padding: 3rem 1.5rem;`;

const Container=styled.div `
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;`;
    
const Columns= styled.div`
    flex-grow: 1;
    
    position: relative;
    width: auto;
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-top: -.75rem;
    text-align: center!important;`;

const Column= styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: .75rem;`;

const H2= styled.div`
    margin-top: .03em;
    font-size:3em`;

const H1= styled.div`
    font-size: 5em;`;
    

        