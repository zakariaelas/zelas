import React from "react"
import { medium, small } from "../../lib/media-queries"
import { Gemography, Kudos } from "../Projects"

const OtherProjects = () => {
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 500px));
        justify-content: space-between;
        grid-column-gap: 32px;
        grid-row-gap: 48px;
        ${medium} {
          grid-template-columns: repeat(2, minmax(auto, 400px));
        }
        ${small} {
          grid-template-columns: minmax(auto, 600px);
          justify-content: center;
        }
      `}
    >
      <Kudos />
      <Gemography />
    </div>
  )
}

export default OtherProjects
