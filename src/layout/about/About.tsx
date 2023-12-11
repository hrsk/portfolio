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
                <ImageWrapper>
                    <img src="" alt="profile img"/>
                </ImageWrapper>
                <Content>
                    <h2>Who am i?</h2>
                    <h6>I'm Yegor Gursky, a Frontend Developer</h6>
                    <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI
                        designs and websites for years, which comply with the latest design trends. I help
                        convert a vision and an idea into meaningful and useful products. Having a sharp eye for
                        product evolution helps me prioritize tasks, iterate fast and deliver faster. </p>
                    <ContactWrapper>
                        <address>
                            <Row>
                                <div>
                                    <span>Name:</span>
                                    <p>Yegor Gursky</p>
                                </div>
                                <div><span>Age:</span>
                                    <p>31</p>
                                </div>
                            </Row>
                            <Row>

                                <div>
                                    <span>Email:</span>
                                    <p><a href="mailto:gurskygursky@example.com">hrsk.yegor@example.com</a></p>
                                </div>
                                <div><span>From:</span>
                                    <p>Minsk, Belarus</p>
                                </div>
                            </Row>
                        </address>
                    </ContactWrapper>
                </Content>
            </InfoWrapper>
        </AboutWrapper>
    );
}

const AboutWrapper = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  align-content: center;
  flex-flow: column;
  padding: 15px 0 15px 0;
`

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const ImageWrapper = styled.div`
  background-color: white;
  width: 300px;
  height: 300px;
`

const Content = styled.div`
  display: flex;
  flex-flow: column;

  h2 {
    color: #009e66;
    font-size: 18px;
    margin-bottom: 15px;
  }

  h6 {
    position: relative;
    font-size: 26px;
    margin-bottom: 15px;
  }

  p {
    margin: 0;
  }
`

const ContactWrapper = styled.div`
  font-size: 15px;
  margin-bottom: 4px;
  padding: 29px 0;

  address {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
  }
`
const Row = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 15px;
  margin-right: 15px;
`