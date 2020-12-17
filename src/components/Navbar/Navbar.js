import { navigate } from "@reach/router"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import Logo from "../../assets/icons/logo.svg"
import { small } from "../../lib/media-queries"

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -32px;
`

const NavLink = styled.a`
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  margin-right: 48px;
  transition: color 0.2s ease-in;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  ${small} {
    margin-right: 24px;
  }
  &:hover,
  &:active {
    color: #564c9f;
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

export const Navbar = () => {
  const clickHandler = () => {
    navigate("/#projects", { replace: true })
  }

  return (
    <Layout>
      <Link title="Home" to="/">
        <div
          css={`
            display: flex;
            margin-top: 32px;
          `}
        >
          <Logo />
        </div>
      </Link>
      <Nav>
        <NavLink onClick={clickHandler}>.projects</NavLink>
        <NavLink
          title="Github Repo"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/zakariaelas"
        >
          .github
        </NavLink>
        <NavLink
          title="LinkedIn Profile"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/zakaria-el-asri-850197169/s"
        >
          .linkedin
        </NavLink>
      </Nav>
    </Layout>
  )
}
