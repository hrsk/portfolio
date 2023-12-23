import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/global/Theme";
import {Container} from "../../components/Container";
import {SocialMediaList} from "../../components/footer/social_media/SocialMediaList";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FlexWrapper direction={'row'} align={'center'} justify={'space-evenly'}>
                    <Copyright>Copyright © 2024 Yahor Hurski. All rights reserved.</Copyright>
                    <SocialMediaList/>
                </FlexWrapper>
            </Container>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    padding: 15px;
`

const Copyright = styled.small`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.1em;
    color: ${theme.colors.fonts.text}
`

