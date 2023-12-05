import React from "react";
import {Header} from "../../common/header/Header";
import styled from "styled-components";
import js_image from "./../../assets/skills/JavaScript-logo.png"
import react_image from "./../../assets/skills/react.png"
import redux_image from "./../../assets/skills/redux.png"
import node_image from "./../../assets/skills/node.png"
import html_css_image from "./../../assets/skills/htmlcss.png"
import typescript_image from "./../../assets/skills/Typescript-logo.png"

export const Skills = () => {
    return (
        <Wrapper>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
            <SkillsWrapper>
                <SkillWrapper>
                    <SkillIcon src={html_css_image}/>
                    <SkillDescription>
                        <h3>HTML/CSS</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIcon src={js_image}/>
                    <SkillDescription>
                        <h3>Javasript</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIcon src={react_image}/>
                    <SkillDescription>
                        <h3>ReactJS</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIcon src={redux_image}/>
                    <SkillDescription>
                        <h3>Redux</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIcon src={typescript_image}/>
                    <SkillDescription>
                        <h3>TypeScript</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIcon src={node_image}/>
                    <SkillDescription>
                        <h3>Node.js</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
            </SkillsWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  padding: 15px 0 15px 0;
`
const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const SkillWrapper = styled.div`
  width: 250px;
  background-color: #116466;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  border-radius: 7px;
`

const SkillDescription = styled.div`
  margin: 0;

  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 24px;
  }

  span {
    font-weight: 400;
    font-size: 16px;
  }
`
const SkillIcon = styled.img`
  height: 64px;
  width: 64px;
`
