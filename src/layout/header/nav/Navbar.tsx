import React from "react";
import styled from "styled-components";

export const Nav = () => {
    return (
        <NavWrapper>
            <ListWrapper>
                <li><a href="/homepage">Homepage</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ListWrapper>
        </NavWrapper>
    );
}

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ListWrapper = styled.ul`
  display: flex;
  flex-flow: row;
  gap: 40px;
  list-style: none;

  li {
    display: flex;
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
