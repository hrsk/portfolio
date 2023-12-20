import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";

const ArraySkills = [
    {id: 1, title: 'Web Design', percents: '60%'},
    {id: 2, title: 'HTML/CSS', percents: '85%'},
    {id: 3, title: 'JavaScript', percents: '80%'},
    {id: 4, title: 'React JS', percents: '70%'},
    {id: 5, title: 'Redux', percents: '70%'},
    {id: 6, title: 'Typescript', percents: '60%'},
]
export const Skills = () => {
    return (
        <SkillsWrapper>
            {
                ArraySkills.map((skill) => {
                    return (
                        <Skill key={skill.id}
                               title={skill.title}
                               percents={skill.percents}/>
                    )
                })
            }
        </SkillsWrapper>
    );
};


const SkillsWrapper = styled.div`
    display: grid;
    /* Будет создано 3 колонки */
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 42px;

`