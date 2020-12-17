import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import Logo from "../../assets/icons/logo.svg"
import { Container, Github, LinkedIn } from "../../lib"
import { small } from "../../lib/media-queries"
import OtherProjects from "../OtherProjects/OtherProjects"

const Layout = styled.footer`
  background-color: #f0f4f8;
  padding-top: 96px;
  padding-bottom: 32px;
  margin-top: 144px;
`

const Heading = styled.h2`
  font-size: 40px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  ${small} {
    font-size: 2rem;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
  aling-items: center;
`

export const Footer = ({ withOtherProjects }) => {
  return (
    <Layout>
      <Container>
        {withOtherProjects ? (
          <div
            css={`
              margin-bottom: 96px;
            `}
          >
            <Heading
              css={`
                margin-bottom: 80px;
              `}
            >
              Other Projects
            </Heading>
            <OtherProjects />
          </div>
        ) : null}
        <Heading>Get in touch with me</Heading>
        <p
          css={`
            margin: 0;
            padding: 0;
            margin-top: 48px;
            max-width: 750px;
            font-size: 16px;
          `}
        >
          If you’re interested in working with me, have any questions, or want
          to have a chat, you can shoot me an email.
        </p>
        <p
          css={`
            margin: 0;
            padding: 0;
            margin-top: 16px;
            font-weight: bold;
            padding-bottom: 48px;
            font-size: 16px;
          `}
        >
          zakariasaadelasri@gmail.com
        </p>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link to="/" title="Home">
            <Logo />
          </Link>
          <Social>
            <Github />
            <LinkedIn />
          </Social>
        </div>
      </Container>
    </Layout>
  )
}
