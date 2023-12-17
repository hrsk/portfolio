import React from "react";
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import todolist_image from "./../../assets/projects/todo.png";
import {Project} from "../../components/project/Project";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {ProjectMenu} from "../../components/project_menu/ProjectMenu";

const ArrayProjectMenuItems = ['All', 'Landing', 'React', 'SPA']
export const Projects = () => {
    return (
        <ProjectsSection>
            <Container>
                <Header description={"Showcasing some of my best work"}
                        title={"Projects"}
                />
                <ProjectMenu menuItems={ArrayProjectMenuItems}/>
                <FlexWrapper justify={'space-between'}>
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
                </FlexWrapper>
            </Container>
        </ProjectsSection>
    );
}

const ProjectsSection = styled.section``
