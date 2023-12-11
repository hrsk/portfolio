import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import todolist_image from "./../../assets/projects/todo.png";

export const Projects = () => {
    return (
        <ProjectsWrapper>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
            <ImageContainer>
                <ImageWrapperContainer>
                    <ImageWrapperBox>
                        <Description>
                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit Dolore, porro rem quod illo quam,
                                eum alias id, repellendus magni, quas.</p>
                            <a
                                title={"https://github.com/gurskygursky"}
                                href={"https://github.com/gurskygursky"}
                            >
                                <ClickedLink>More Info</ClickedLink>
                            </a>
                        </Description>
                    </ImageWrapperBox>
                    <Img src={todolist_image} alt={'todo'}/>
                </ImageWrapperContainer>
                <ContentProjectInfo>
                    <h5>Social Network</h5>
                </ContentProjectInfo>
            </ImageContainer>
        </ProjectsWrapper>
    );
}

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: max-content;
`
const Description = styled.div`
  padding: 5px 20px;
  text-align: center;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
    color: #ffffff;
  }

  a {
    text-decoration: none;
  }
`

const ClickedLink = styled.span`
  color: #009e66;
  font-weight: 600;
  font-size: 18px;

  &:visited {
    color: #009e66;
    text-decoration: none;
  }

  &:hover {
    color: #009e66;
    text-decoration: none;
  }

  &:active {
    color: #009e66;
    text-decoration: none;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 7px;
`

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vh;
  height: 100%;
`

const ImageWrapperBox = styled.div`
  background-color: rgba(0, 0, 0, .9);
  bottom: 0;
  height: 100%;
  position: absolute;
  transition: all .15s ease-in-out;
  visibility: hidden;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const ImageWrapperContainer = styled.div`
  display: flex;
  padding: 0 0 70% 0;
  position: relative;
  z-index: 0;

  &:hover ${ImageWrapperBox} {
    visibility: visible;
  }
`

const ContentProjectInfo = styled.div`
  color: #ffffff;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  padding-top: 15px;

  h5 {
    margin: 0 0 15px;
  }
`