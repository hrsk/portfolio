import styled from "styled-components";

type PropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}
export const FlexWrapper = styled.div<PropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`
