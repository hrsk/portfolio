import React from "react";
import styled from "styled-components";
import {Nav} from "./nav/Navbar";

export const Header = () => {
    return (
        <HeaderWrapper>
            <Nav/>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: center;
  min-height: 45px;
  height: auto;
  background-color: #0f0f11;
  padding: 10px 0 10px 0;
  position: sticky;
  top: 0;
  z-index: 99999;
  opacity: .95;
`
