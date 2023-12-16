import React from "react";
import styled from "styled-components";
import {Navbar} from "./nav/Navbar";
import home_icon from "../../assets/images/logo/home_line_icon.svg"
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const ArrayHeaderMenuItems = ['Homepage', 'About', 'Skills', 'Projects', 'Contacts'];
export const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo href={'/#'}>
                        <svg viewBox={'0 0 36 36'}>
                            <use xlinkHref={`${home_icon}#${'home_icon'}`}/>
                        </svg>
                    </Logo>
                    <Navbar menuItems={ArrayHeaderMenuItems}/>
                </FlexWrapper>
            </Container>
        </HeaderWrapper>
    );
}

const Logo = styled.a`
  width: 48px;
  height: 48px;
  
  svg {
    fill: #f5f5f7
  }

  &:hover {
    svg {
      use {
        fill: #009e66;
      }
    }
  }
`

const HeaderWrapper = styled.header`
  background-color: #0f0f11;
  position: sticky;
  top: 0;
  z-index: 99999;
  opacity: .95;
`
