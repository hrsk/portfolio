import React from "react";
import styled from "styled-components";
import {Nav} from "./nav/Navbar";

export const Header = () => {
    return (
        <Wrapper>
            <Nav/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  min-height: 45px;
  background-color: #1a181d;
  padding: 10px;
`
