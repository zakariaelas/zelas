import React from "react"
import styled from "styled-components/macro"
import GithubIcon from "../assets/icons/github.svg"

const Link = styled.a`
  text-decoration: none;
  margin: 0;
`

export const Github = () => {
  return (
    <Link
      title="Github Repo"
      target="_blank"
      rel="noreferrer"
      href="https://github.com/zakariaelas"
    >
      <GithubIcon />
    </Link>
  )
}
