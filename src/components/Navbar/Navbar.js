import React from "react"
import styled from "styled-components/macro"
import Logo from "../../assets/icons/logo.svg"
import { Link } from "gatsby"
import { small } from "../../lib/media-queries"
import { navigate } from "@reach/router"

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
  ${small} {
    margin-top: 32px;
  }
`

export const Navbar = () => {
  const clickHandler = () => {
    navigate("/#projects", { replace: true })
  }

  return (
    <Layout>
      <Link title="Home" to="/">
        <Logo />
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
