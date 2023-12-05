import React from "react";
import styled from "styled-components";

export const Nav = () => {
    return (
        <ListWrapper>
            <ListItem><a href="/homepage">Homepage</a></ListItem>
            <ListItem><a href="/about">About</a></ListItem>
            <ListItem><a href="/skills">Skills</a></ListItem>
            <ListItem><a href="/projects">Projects</a></ListItem>
            <ListItem><a href="/contacts">Contacts</a></ListItem>
        </ListWrapper>
    );
}

const ListWrapper = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: center;
  gap: 50px;
  list-style: none;
`
const ListItem = styled.li`
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
    width:  80px;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`
