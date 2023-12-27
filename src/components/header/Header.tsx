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
            <span>{props.description}
                <AnimatedBar></AnimatedBar>
            </span>
            <h2>{props.title}</h2>
        </Wrapper>

    );
}

const AnimatedBar = styled.span`
    background-color: #009e66;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    margin: 0 auto;
    position: relative;
    right: 0;
    width: 100%;
    @keyframes barAnimation {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(125px);
        }
    }
`

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
        //color: ${theme.colors.fonts.text};
    }

    h2 {
        //content: "";
        position: absolute;
        //margin-bottom: 0;
        //color: #fff;
        opacity: .03;
        font-size: 8.25rem;
        text-transform: uppercase;
        font-weight: 600;
        //z-index: 0;
    }

    ${AnimatedBar}:before {
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: barAnimation;
        animation-timing-function: linear;
        background-color: #101010;
        content: '';
        height: 100%;
        position: absolute;
        //top: 0;
        left: 8px;
        width: 4px;
    }

    ${AnimatedBar}:after {
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: barAnimation;
        animation-timing-function: linear;
        background-color: #101010;
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        width: 4px;
    }
`


