import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Header} from "../../components/header/Header";
import {theme} from "../../styles/global/Theme";

export const Slogan = () => {
    return (
        <SloganWrapper>
            <Header description={"Let’s work together"}
                    title={"Hire Me"}
            />
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Text>I’m available for freelance work.<br/>
                        Have any projects in your mind?
                        If the right project comes along - feel free to contact
                        me!<br/>
                    </Text>
                    <Button>Hire Me!</Button>
                </FlexWrapper>
            </Container>
        </SloganWrapper>
    );
};

const SloganWrapper = styled.section``;

const Text = styled.p`
  text-align: center;
  padding-bottom: 25px;
`;

const Button = styled.button.attrs((props) => ({
    type: props.type || 'submit'
}))`
  width: max-content;
  cursor: pointer;
  border-radius: 30px;
  background-color: ${theme.colors.primaryColor};
  border: 1px solid ${theme.colors.primaryColor};

  padding: 10px 35px;
`