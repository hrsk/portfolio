import React from 'react';
import {Header} from "../../components/header/Header";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Skills} from "./skills/Skills";
import {ResumeInformation} from "./ResumeInformation";
import {SectionHeader} from "../../components/section_header/SectionHeader";

export const Resume = () => {
    return (
        <ResumeWrapper>
            <Header description={'Check out my resume'} title={'Resume'}/>
            <FlexWrapper>
                <Container>
                    <ResumeInformation/>
                    <SectionHeader description={'My level of knowledge in some tools'} title={'My Skills'}/>
                    <Skills/>
                </Container>
            </FlexWrapper>
        </ResumeWrapper>
    );
};

const ResumeWrapper = styled.section`

`




