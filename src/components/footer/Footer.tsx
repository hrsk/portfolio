import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterWrapper>
            <span>Copyright © 2024 All rights reserved.</span>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
  background-color: #1a181c;
  min-height: 45px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 10px;

  span {
    color: white;
  }
`