import styled from "styled-components/macro"

export const Hyperlink = styled.a`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 16px;
  text-decoration: underline;
  &:visited {
    color: ${props => props.color};
  }
`
