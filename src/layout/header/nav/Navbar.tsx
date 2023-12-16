import React from "react";
import styled from "styled-components";

export const Navbar = (props: { menuItems: Array<string> }) => {
    return (
        <NavbarWrapper>
            {
                <ul>
                    {
                        props.menuItems.map((item, index) => {
                            return <li key={index}>
                                <a href={`/${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </li>
                        })
                    }
                </ul>
            }
        </NavbarWrapper>
    );
}

const NavbarWrapper = styled.nav`
  ul {
    display: flex;
    flex-flow: row;
  }

  li {
    display: flex;
    color: #f5f5f7;
    position: relative;
    margin-right: 32px;

    a {
      text-decoration: none;
      color: #f5f5f7;
    }

    a:hover {
      color: #e6e6e6;
    }

    a:hover::before {
      content: "";
      position: absolute;
      background: #e6e6e6;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }
`
