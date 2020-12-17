import { graphql } from "gatsby"
import React from "react"
import { PageLayout } from "../components/PageLayout"
import { Section, SectionHeading } from "../lib"
import { Hyperlink } from "../lib/Hyperlink"
import { Paragraph } from "../lib/Paragraph"
import Image from "gatsby-image"

const SessionTab = ({ data }) => {
  const { screen } = data
  return (
    <PageLayout withOtherProjects>
      <Section
        css={`
          max-width: 720px;
        `}
      >
        <h1
          css={`
            font-size: 56px;
            line-height: 48px;
            margin-bottom: 32px;
            font-weight: bold;
            font-family: "Nunito", sans-serif;
            color: #19216c;
          `}
        >
          SessionTab
        </h1>
        <Paragraph>
          <Hyperlink
            color="#19216C"
            href="https://github.com/zakariaelas/SessionTab"
          >
            SessionTab
          </Hyperlink>{" "}
          is a chrome extension I built to enhance my browsing experience. I am
          usually interleaving tasks and almost never really work on something
          until completion. This mainly happens when I'm at university having
          many quizzes, assignments, course projects, and side projects to worry
          about.
        </Paragraph>
        <Paragraph>
          The result is 4 windows open and a dozen of tabs open in each one
          them. I don't close windows because I am too scared to lose something
          valuable. I used some of my free time for a couple of days to
          implement a solution to my problem and ease the pain I endured for
          quite a long time.
        </Paragraph>
      </Section>
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 96px;
        `}
      >
        <Image
          css={`
            width: 100%;
            height: 100%;
            border-radius: 18px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          `}
          alt="SessionTab screenshot"
          fluid={screen.childImageSharp.fluid}
        />
      </div>
      <Section
        css={`
          max-width: 740px;
        `}
      >
        <SectionHeading>Motivation</SectionHeading>
        <Paragraph>
          I tried using bookmarks for a while but very quickly got lost into
          them. It felt too awkward and slow. I looked for options on the Chrome
          store but I was not satisfied. I wanted something faster and simpler
          ... Okay I have to admit that I definitely could have done some more
          research, but ... I wanted to use this opportunity to make a (useful)
          chrome extension all by myself.
        </Paragraph>
        <Paragraph>
          This is by far not the fanciest or the most challenging project I have
          worked on, but it is definitely one of my most useful ones. I use this
          almost every day, and that makes it a success in my eyes.
        </Paragraph>
      </Section>
      <Section
        css={`
          max-width: 740px;
        `}
      >
        <SectionHeading>Technologies</SectionHeading>
        <Paragraph>
          The very first version of this extension was built using VanillaJS and
          some of the Chrome APIs. However, I wanted to add more functionality
          and make the solution more extendable and maintainable. It is
          definitely achievable with VanillaJS, but the developer experience is
          much better in React. So I ended up using along with Reach-ui.{" "}
        </Paragraph>
        <Paragraph>
          I created an opportunity to play with Reach-ui because I didn't really
          have any experience with accessibility in the past, so I wanted to
          give it a shot in this small project.
        </Paragraph>
      </Section>
    </PageLayout>
  )
}

export const query = graphql`
  query SessionTabImagesQuery {
    screen: file(relativePath: { eq: "session-tab-main.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SessionTab
