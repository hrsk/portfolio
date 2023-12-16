import styled from "styled-components";

export const ProjectMenu = (props: { menuItems: Array<string> }) => {
    return (
        <MenuWrapper>
            <ul>
                {
                    props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href={'/#'}>
                                {item}
                            </Link>
                        </ListItem>
                    })
                }
            </ul>
        </MenuWrapper>
    )
}

const MenuWrapper = styled.nav`
  padding: 15px 0 15px 0;

  ul {
    display: flex;
    justify-content: center;
    gap: 30px;

  }
`

const ListItem = styled.li`
  &:hover {
    border-bottom: 2px solid rgba(0, 158, 102, 100);
    margin-bottom: 0;
    line-height: 1;
  }

`

const Link = styled.a`
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    color: #009e66;
  }
`