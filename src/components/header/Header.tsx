import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/global/Theme";

type PropsType = {
    description: string
    title: string
}
export const Header = (props: PropsType) => {
    return (
        <Wrapper>
            <span>{props.description}</span>
            <h2>{props.title}</h2>
        </Wrapper>

    );
}

const Wrapper = styled.div.attrs((props: PropsType) => ({
    content: "" || props.title
}))`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  height: 100%;
  position: relative;
  margin-bottom: 2rem;

  span {
    color: ${theme.colors.fonts.text};
    border-bottom: 2px solid rgba(0, 158, 102, 100);
    margin-bottom: 0;
    line-height: 1;
    z-index: 1;
  }

  h2 {
    content: "";
    position: absolute;
    margin-bottom: 0;
    color: #fff;
    opacity: .03;
    font-size: 8.25rem;
    text-transform: uppercase;
    font-weight: 600;
    z-index: 0;
  }
`
