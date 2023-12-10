import React from "react";
import {Header} from "../../common/header/Header";
import styled from "styled-components";
import sprite from "./../../assets/images/icons//skills/sprite.svg"

export const Skills = () => {
    return (
        <Wrapper>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
            <SkillsWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'html_icon'}/>
                    <SkillDescription>
                        <h3>HTML</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'css_icon'}/>
                    <SkillDescription>
                        <h3>CSS</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'javascript_icon'}/>
                    <SkillDescription>
                        <h3>Javasript</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'react_icon'}/>
                    <SkillDescription>
                        <h3>ReactJS</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'redux_icon'}/>
                    <SkillDescription>
                        <h3>Redux</h3>
                        <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </SkillDescription>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillIconImage iconId={'typescript_icon'}/>
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

const SkillIcon = styled.svg`
  width: 160px;
  height: 160px;
  background-size: 100% auto;
`

type PropsType = {
    iconId: string
}
const SkillIconImage = (props: PropsType) => {
    return (
        <SkillIcon>
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </SkillIcon>
    )
}
