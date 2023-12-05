import React from "react";
import styled from "styled-components";

export const Nav = () => {
    return (
        <ListWrapper>
            <li><a href="/homepage">Homepage</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contacts">Contacts</a></li>
        </ListWrapper>
    );
}

const ListWrapper = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: center;
  gap: 50px;
  list-style: none;

  li {
    display: list-item;
    color: #f5f5f7;
    position: relative;

    a {
      text-decoration: none;
      color: #f5f5f7;
    }

    a:hover {
      color: #f5f5f7;
    }

    a:hover::before {
      content: "";
      position: absolute;
      background: #f5f5f7;
      width: 80px;
      height: 2px;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }
`
