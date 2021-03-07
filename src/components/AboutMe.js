import React from 'react'
import styled, { css } from "styled-components"


const AboutMe = () =>
(

    <Main id="aboutMe">
        <SubMain>
            <Container>
                <Columns>
                    <Column>
                
                        <H2>About Me</H2>
                        <Paragraph>
                            I have done my undergrad degree from Ahsanullah University of Science & Technology in Computer Science and Engineering (CSE). 
                            I have researched in the field of Natural Language Processing (NLP) using Machine Learning and Deep Learning. 
                            I like to build projects and I always look forward to new challenges and problems that can be solved using my technical and analytical knowledge. 
                            I have a hunger to learn more.
                            I look forward to start my career in a meaningful and challenging position that allows me to utilize my programming, database, 
                            and management skills for the growth of the organization as well as to improve my knowledge of current software industry trends. 
                        </Paragraph>

                    </Column>
                </Columns>
            </Container>
        </SubMain>
    </Main>
        
);

export default AboutMe;

const Main = styled.section `
    background-color: #e8e4e3;
    color: #333333;`;

const SubMain= styled.div `
    padding: 3rem 5rem;`;

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
    text-align: left!important;`;

const Column= styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: .75rem;`;

const H2= styled.div`
    margin-top: .03em;
    font-size:2em`;

const Paragraph= styled.p `
    text-align: left;`;