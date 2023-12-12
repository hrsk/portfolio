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
            <p>{props.description}</p>
            <h2>{props.title}</h2>
        </Wrapper>

    );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  margin-bottom: 25px;

  p {
    color: ${theme.colors.fonts.span};
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 64px;
    font-weight: 800;
  }

  h2::before {
    content: "";
    position: absolute;
    background: #fff;
    width: 70px;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`
