import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";

export const About = () => {
    return (
        <AboutWrapper>
            <Header title={"About Me"}
                    description={"Get to know me"}
            />
            <InfoWrapper>
                <Description>
                    <h2>Who am i?</h2>
                    <h6>I'm Yegor Gursky, a Frontend Developer</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam, eum
                        alias id, repellendus magni, quas.
                    </p>
                </Description>
                <ContactWrapper>
                    <h4>Name:</h4>
                    <p>Yegor Gursky</p>
                    <h4>Age:</h4>
                    <p>31</p>
                    <h4>Email:</h4>
                    <p><a href="mailto:gurskygursky@example.com">hrsk.yegor@example.com</a></p>
                    <h4>From:</h4>
                    <p>Minsk, Belarus</p>
                </ContactWrapper>
            </InfoWrapper>
        </AboutWrapper>
    );
}

const AboutWrapper = styled.section`
  padding: 15px 0 15px 0;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 100px;
`

const Description = styled.div`
  h2 {
    color: #009e66;
    font-size: 18px;
    padding-bottom: 15px;
  }

  h6 {
    position: relative;
    font-size: 26px;
    padding-bottom: 15px;
  }
`

const ContactWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
`
