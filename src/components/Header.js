import React from 'react'
import styled, { css } from "styled-components"



const Header= () =>
(
    <Main>
        <SubMain>
        <Container>
        <Columns>
        <Column>
        <h1>Ragib Un Nur</h1>
        <H2>CSE Graduate</H2>
        </Column>
        </Columns>
    </Container>
        </SubMain>
    </Main>
    
);



export default Header;

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
    margin-top: -1.25rem;`;
    

        