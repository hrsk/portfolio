import styled from "styled-components";
import React from "react";
import {theme} from "../../../../styles/global/Theme";

export const Skill = (props: {
    title: string,
    percents: string,
}) => {
    return (
        <SingleSkill>
            <SkillDescription>
                            <span>
                                {props.title}
                            </span>
                <span>
                                {props.percents}
                            </span>
            </SkillDescription>
            <ProgressBarContainer>
                <ProgressBar role={'progressbar'} width={props.percents}>
                </ProgressBar>
            </ProgressBarContainer>
        </SingleSkill>
    );
};

export const SingleSkill = styled.div`
    //margin-bottom: 42px;
`
export const SkillDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4px;

    span {
        //right: 0;
        color: #cecece;
        //text-transform: uppercase;
    }

`
export const ProgressBarContainer = styled.div`
    display: flex;
    height: 0.5rem !important;
    margin-bottom: 1.5rem !important;

    background-color: #2f2f2f;
    border-radius: 1px;
    font-size: 15px;
    //height: 9px;
    overflow: visible;
`
type ProgressBarPropsType = {
    width: string
}
export const ProgressBar = styled.div<ProgressBarPropsType>`
    background-color: ${theme.colors.primaryColor};
    width: ${(props) => props.width || '90%'}
`