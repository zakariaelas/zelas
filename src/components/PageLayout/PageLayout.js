import React from "react"
import { Container } from "../../lib"
import { Footer } from "../Footer"
import { Navbar } from "../Navbar"

export const PageLayout = ({ children, withOtherProjects }) => {
  return (
    <>
      <Container>
        <div
          css={`
            padding-top: 32px;
          `}
        >
          <Navbar />
        </div>
        {children}
      </Container>
      <Footer withOtherProjects={withOtherProjects} />
    </>
  )
}
