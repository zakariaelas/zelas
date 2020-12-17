import styled from "styled-components/macro"
import { small } from "../../lib/media-queries"

export const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  ${small} {
    grid-template-columns: 1fr;
  }
`
