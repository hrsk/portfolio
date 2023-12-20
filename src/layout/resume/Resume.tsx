import React from 'react';
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/global/Theme";
import {Skills} from "./skills/Skills";

export const Resume = () => {
    return (
        <ResumeWrapper>
            <Header description={'Check out my resume'} title={'Resume'}/>
            <FlexWrapper>
                <Container>
                    <SectionHeader description={'My level of knowledge in some tools'} title={'My Skills'}/>
                    <Skills/>
                </Container>
            </FlexWrapper>
        </ResumeWrapper>
    );
};

const ResumeWrapper = styled.section`

`
const SectionHeader = (props: {
    description: string, title: string
}) => {
    return (
        <SectionHeaderWrapper>
            <p>{props.description}</p>
            <h3>{props.title}</h3>
        </SectionHeaderWrapper>
    )
}
const SectionHeaderWrapper = styled.div.attrs((props: { title: string }) => ({
    content: "" || props.title
}))`

    text-align: left;
    max-width: 100%;
    position: relative;
    margin-bottom: 48px;

    p {
        color: ${theme.colors.fonts.text};
        margin-bottom: 16px;
    }

    h3 {
        font-size: 38px;
        font-weight: 700;
    }
`




