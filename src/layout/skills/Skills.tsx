import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import {SkillIconImage} from "./SkillIconImage";

export const Skills = () => {
    return (
        <Wrapper>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
            <SkillsWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'html_icon'} viewBox={'0 0 32 32'}/>
                    <SkillDescription>
                        <h3>HTML</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'css_icon'} viewBox={'0 0 32 32'}/>
                    <SkillDescription>
                        <h3>CSS</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'javascript_icon'} viewBox={'0 0 128 128'}/>
                    <SkillDescription>
                        <h3>Javasript</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'react_icon'} viewBox={'0 0 128 128'}/>
                    <SkillDescription>
                        <h3>ReactJS</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'redux_icon'} viewBox={'0 0 128 128'}/>
                    <SkillDescription>
                        <h3>Redux</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'typescript_icon'} viewBox={'0 0 128 128'}/>
                    <SkillDescription>
                        <h3>TypeScript</h3>
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

const Wrapper = styled.section`
  //padding: 15px 0 15px 0;
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
