import React from "react";
import {Header} from "../../common/header/Header";
import styled from "styled-components";

export const Skills = () => {
    return (
        <Wrapper>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  padding: 15px 0 15px 0;
`
