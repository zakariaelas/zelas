import styled from "styled-components/macro"
import { medium, small } from "./media-queries"

export const Container = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  ${medium} {
    max-width: 876px;
  }
  ${small} {
    padding: 0 24px;
  }
`
