import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components/macro"
import { PageLayout } from "../components/PageLayout"
import { PrettyBold, Section, SectionHeading } from "../lib"
import { medium, small } from "../lib/media-queries"
import { Paragraph } from "../lib/Paragraph"

const ImageContainer = styled.div`
  margin: 0;
  margin-top: 32px;
  flex: 1;
  transition: all 0.2s;
`

const Gemography = ({ data }) => {
  const { orbit, internship, grabit } = data
  return (
    <PageLayout withOtherProjects>
      <Section
        css={`
          display: flex;
          justify-content: space-around;
          align-items: center;
          ${medium} {
            display: block;
          }
          ${small} {
            display: block;
          }
        `}
      >
        <h1
          css={`
            margin: 0;
            padding: 0;
            font-size: 64px;
            line-height: 48px;
            color: #614fe7;
            margin-right: 32px;
            margin-bottom: 32px;
            ${small} {
              font-size: 48px;
              margin-right: 0;
            }
          `}
        >
          Gemography
        </h1>
        <Paragraph>
          I had the chance to intern at Gemography during the Summer of 2020. My
          experience was very rewarding and I believe I have enjoyed every part
          of it. The exciting part was working with professional developers who
          were miles ahead of me and having the chance to get feedback from
          them.
          <br />
          During my internship, I have worked on a full stack application that
          provides assistance to interviewers and supports real-time audio and
          video communication between interviewers and candidates.
        </Paragraph>
      </Section>
      <Section>
        <SectionHeading>Personal Goals and Objectives</SectionHeading>
        <Paragraph
          css={`
            max-width: 680px;
          `}
        >
          Before the internship, I felt like I was stagnating. I love learning
          new stuff and working on side-projects, but quite frankly, the lack of
          feedback from professionals and experienced developers was getting a
          bit frustrating. I was desperate for my mistakes to be pointed out by
          senior and more experienced developers. I also wanted to discover
          working in a professional setting: communication and collaboration
          with co-workers, working full-time, meeting deadlines, etc.
          <br /> I knew Gemography offered a great mentorship experience and
          almost guarenteed a learning curve. I was confident that, at that
          point in time, this was the best choice for my career.
        </Paragraph>
      </Section>
      <Section
        css={`
          display: flex;
          align-items: center;
          flex-wrap: reverse;
          justify-content: space-between;
        `}
      >
        <ImageContainer
          css={`
            display: flex;
            justify-content: center;
          `}
        >
          <Image
            alt="Technologies used during the internship"
            css={`
              width: 100%;
              height: 100%;
            `}
            fixed={orbit.childImageSharp.fixed}
          />
        </ImageContainer>
        <div
          css={`
            max-width: 620px;
            ${medium} {
              max-width: 100%;
            }
            ${small} {
              max-width: 100%;
            }
          `}
        >
          <SectionHeading>Tasks</SectionHeading>
          <Paragraph>
            I first went through a short bootcamp period of 3 weeks where I
            worked on an full-stack web application where independent couriers
            can pick-up anything customers requested through the app and get it
            delivered to their door. You can think of it like a Glovo clone.
            Through weekly demos with my supervisors, I learned about the
            importance of having a product mindset and how it can help you write
            and ship better code. This is particularly relevant and important
            when working on an app by myself.
          </Paragraph>
          <Paragraph>
            For the remainder of the internship, I worked, in close
            collaboration with my supervisor Yassine, on a proof of concept. The
            project was to develop an interviewing platform that assists
            interviewers in both the interviewing and assessment phases. The
            application was also powered with real-time audio and video
            communication by using the Twilio Programmable Video API which sits
            on top of WebRTC.
          </Paragraph>
        </div>
      </Section>
      <Section>
        <SectionHeading>Results</SectionHeading>
        <Paragraph
          css={`
            max-width: 630px;
          `}
        >
          The interviewing platform was the bulk of my internship. With the help
          and mentoring of my supervisor, we were successfully able to implement
          a solution to most problems the team was facing.
        </Paragraph>
        <ImageContainer
          css={`
            margin-top: 64px;
            margin-bottom: 96px;
            text-align: center;
          `}
        >
          <Image
            css={`
              width: 100%;
              height: 100%;
            `}
            alt="Internship project screenshot"
            fluid={internship.childImageSharp.fluid}
          />
        </ImageContainer>
        <Paragraph
          css={`
            max-width: 630px;
          `}
        >
          As part of my on-boarding process, I worked on the below application
          for the first couple of weeks. I think it was a fun and important
          challenge because I believe it helped the team gauge my level and
          allowed me to know what was expected from me as a developer.
        </Paragraph>
        <ImageContainer
          css={`
            margin-top: 64px;
            text-align: center;
          `}
        >
          <Image
            alt="Internship bootcamp project screenshot"
            css={`
              width: 100%;
              height: 100%;
            `}
            fluid={grabit.childImageSharp.fluid}
          />
        </ImageContainer>
      </Section>
      <Section
        css={`
          max-width: 960px;
        `}
      >
        <SectionHeading>What I Learned</SectionHeading>
        <Paragraph>
          Through working on the projects and code reviews, I learned a lot more
          about <PrettyBold>state management</PrettyBold>,{" "}
          <PrettyBold>advanced patterns</PrettyBold>,{" "}
          <PrettyBold>styling</PrettyBold>,{" "}
          <PrettyBold>UI libraries</PrettyBold>, and{" "}
          <PrettyBold>folder structure</PrettyBold> in React. I also learned
          about the <PrettyBold>Twilio Video API</PrettyBold> and some of the
          underlying concepts in WebRTC.
          <br />I believe I got much better at designing interfaces and crafting
          better user experiences. This was mainly thanks to a book suggestion
          (Refactoring UI) from my supervisor. It was such a good read and I
          think it opened my eyes to so many things about UI and UX.
        </Paragraph>
        <Paragraph>
          One other prevalent thing I learned about was the{" "}
          <PrettyBold>product ownership mindset</PrettyBold> I have mentioned
          previously. The team is kinda religious about this so it was very
          instructive to learn about it and how it affects the software
          development cycle.
        </Paragraph>
        <Paragraph>
          I also challenged myself to write some{" "}
          <PrettyBold>end-to-end tests</PrettyBold>. I am not afraid to admit
          that they are very far from being good. However, I discovered the
          importance of having tests, experienced how time-saving they can be,
          and learned about how they can actually serve as documentation!
        </Paragraph>
      </Section>
    </PageLayout>
  )
}

export default Gemography

export const query = graphql`
  query GemographyImagesQuery {
    orbit: file(relativePath: { eq: "orbit.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    internship: file(relativePath: { eq: "internship.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grabit: file(relativePath: { eq: "grabit.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
