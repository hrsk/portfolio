import React from "react";
import styled from "styled-components";

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
  p {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 14px;
    color: #9f9f9f;
  }
  h2 {
    margin-top: 0;
  }
  h2::before {
    content: "";
    position: absolute;
    background: #fff;
    width: 70px;
    height: 2px;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`
