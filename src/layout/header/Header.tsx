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
  background-color: #1a181d;
  padding: 10px 0 10px 0;
`
