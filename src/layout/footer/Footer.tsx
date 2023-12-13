import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterWrapper>
            <span>Copyright © 2024 All rights reserved.</span>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.small`
  background-color: #0f0f11;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;

  span {
    color: white;
  }
`