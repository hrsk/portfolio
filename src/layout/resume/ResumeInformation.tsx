import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/global/Theme";

export const ResumeInformation = () => {
    return (
        <ResumeInformationWrapper>
            <EducationContainer>
                <h4>
                    Education
                </h4>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Computer Science</h5>
                    <span>Cambridge University / 2004 - 2007</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Bachelor Degree</h5>
                    <span>University of Tokyo / 2008 - 2010</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Master Degree</h5>
                    <span>Harvard University / 2012 - 2015</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                </ResumeItem>
            </EducationContainer>
            <ExperienceContainer>
                <h4>
                    Experience
                </h4>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Front-End Developer</h5>
                    <span>Google / 2017 - 2018</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                    </p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>Software Engineer</h5>
                    <span>Adobe / 2015 - 2017</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                    </p>
                </ResumeItem>
                <ResumeItem>
                    <ItemArrow></ItemArrow>
                    <h5>UI/UX Designer</h5>
                    <span>Discord / 2019 - Present</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                    </p>
                </ResumeItem>
            </ExperienceContainer>
        </ResumeInformationWrapper>
    );
};

const ResumeInformationWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    margin-bottom: 120px;

`

const EducationContainer = styled.div`
    h4 {
        font-size: 26px;
        margin-bottom: 20px;
    }
`

const ExperienceContainer = styled.div`
    h4 {
        font-size: 26px;
        margin-bottom: 20px;
    }
`
const ItemArrow = styled.span`
    left: 0;
    margin-top: 2px;
    position: absolute;
`


const ResumeItem = styled.div`

    span {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.95;
        display: inline-block;
        margin-bottom: 7px;
        color: ${theme.colors.fonts.text};
    }

    h5 {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 100%;
        margin-bottom: 9px;
    }

    ${ItemArrow}:before {
        height: 16px;
        left: 0;
        width: 16px;
        background-color: #009e66;

        content: "";
        display: block;
        position: absolute;
    }

    ${ItemArrow}:after {
        content: '';
        position: absolute; /* Абсолютное позиционирование */
        left: 16px;
        border: 8px solid transparent;
        border-left: 8px solid #009e66;

    }

    border-bottom: 1px solid #313131;

    background-color: #161616;
    border-left: 2px solid #009e66;
    padding: 32px 48px;
    position: relative;

    &:last-child {
        border-bottom: none;
    }

`
