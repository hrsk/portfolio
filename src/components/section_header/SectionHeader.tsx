import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/global/Theme";

export const SectionHeader = (props: {
    description: string, title: string
}) => {
    return (
        <SectionHeaderWrapper>
            <p>{props.description}</p>
            <h3>{props.title}</h3>
        </SectionHeaderWrapper>
    )
}
const SectionHeaderWrapper = styled.div.attrs((props: { title: string }) => ({
    content: "" || props.title
}))`

    text-align: left;
    max-width: 100%;
    position: relative;
    margin-bottom: 48px;

    p {
        color: ${theme.colors.fonts.text};
        margin-bottom: 16px;
    }

    h3 {
        font-size: 38px;
        font-weight: 700;
    }
`
