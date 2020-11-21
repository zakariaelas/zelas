import React from "react"
import styled from "styled-components/macro"
import LinkedInIcon from "../assets/icons/linkedin.svg"

const Link = styled.a`
  text-decoration: none;
  margin: 0;
`

export const LinkedIn = () => {
  return (
    <Link
      title="LinkedIn Profile"
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/zakaria-el-asri-850197169/s"
    >
      <LinkedInIcon />
    </Link>
  )
}
