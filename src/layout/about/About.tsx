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
                    <DescriptionTitle>
                        <h2>Who am i?</h2>
                        <h6>I'm Yegor Gursky, a Frontend Developer</h6>
                    </DescriptionTitle>
                    <DescriptionText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                    </DescriptionText>
                </Description>
                <ContactWrapper>
                    <Row>
                        <h4>Name:</h4>
                        <p>Yegor Gursky</p>
                    </Row>
                    <Row>
                        <h4>Age:</h4>
                        <p>31</p>
                    </Row>
                    <Row>
                        <h4>Email:</h4>
                        <p><a href="mailto:gurskygursky@example.com">hrsk.yegor@example.com</a></p>
                    </Row>
                    <Row>
                        <h4>From:</h4>
                        <p>Minsk, Belarus</p>
                    </Row>
                </ContactWrapper>
            </InfoWrapper>
        </AboutWrapper>
    );
}

const AboutWrapper = styled.div`
  height: max-content;
  display: flex;
  flex-flow: column;
  padding: 15px 0 15px 0;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Description = styled.div`
  display: flex;
  flex-flow: column;
  width: 600px;
`

const DescriptionTitle = styled.div`
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
const DescriptionText = styled.p`
  margin: 0;
`

const ContactWrapper = styled.address`
  font-size: 15px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`
const Row = styled.div`
  display: flex;
  flex-flow: row;
  gap: 30px;
`