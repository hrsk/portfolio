import React from "react";
import styled from "styled-components";
import {Nav} from "./nav/Navbar";
import spacerocket from "../../assets/images/logo/spacerocket.svg"

export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo viewBox={'0 0 72 72'}>
                <a href={'/#'}>
                    <use xlinkHref={`${spacerocket}#${'space-rocket'}`}/>
                </a>
            </Logo>
            <Nav/>
        </HeaderWrapper>
    );
}

const Logo = styled.svg<{ viewBox: string }>`
  width: 48px;
  height: 48px;
`

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: max-content;
  width: 100%;
  background-color: #0f0f11;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 99999;
  opacity: .95;
`

