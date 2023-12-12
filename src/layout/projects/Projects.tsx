import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import todolist_image from "./../../assets/projects/todo.png";
import {Project} from "../../components/project/Project";

export const Projects = () => {
    return (
        <ProjectsSection>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
            <ProjectsWrapper>
                <Project projectName={'Todolist'}
                         descriptionText={'Lorem ipsum dolor sit amet,\n' +
                             '                            consectetur adipisicing elit Dolore, porro rem quod illo quam,\n' +
                             '                            eum alias id, repellendus magni, quas.'}
                         src={todolist_image}
                />
                <Project projectName={'Todolist'}
                         descriptionText={'Lorem ipsum dolor sit amet,\n' +
                             '                            consectetur adipisicing elit Dolore, porro rem quod illo quam,\n' +
                             '                            eum alias id, repellendus magni, quas.'}
                         src={todolist_image}
                />
                <Project projectName={'Todolist'}
                         descriptionText={'Lorem ipsum dolor sit amet,\n' +
                             '                            consectetur adipisicing elit Dolore, porro rem quod illo quam,\n' +
                             '                            eum alias id, repellendus magni, quas.'}
                         src={todolist_image}
                />
            </ProjectsWrapper>
        </ProjectsSection>
    );
}

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 100vh;
`
const ProjectsWrapper = styled.div `
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
`
