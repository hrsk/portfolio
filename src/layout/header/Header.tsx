import React from "react";
import styled from "styled-components";
import {Nav} from "./nav/Navbar";
import rocket from "../../assets/images/logo/spacerocket.svg"
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo viewBox={'0 0 72 72'}>
                        <a href={'/#'}>
                            <use xlinkHref={`${rocket}#${'space-rocket'}`}/>
                        </a>
                    </Logo>
                    <Nav/>
                </FlexWrapper>
            </Container>
        </HeaderWrapper>
    );
}

const Logo = styled.svg<{ viewBox: string }>`
  width: 48px;
  height: 48px;
`

const HeaderWrapper = styled.header`
  background-color: #0f0f11;
  position: sticky;
  top: 0;
  z-index: 99999;
  opacity: .95;
`
