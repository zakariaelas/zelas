import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components/macro"
import { PageLayout } from "../components/PageLayout"
import { PrettyBold, Section, SectionHeading } from "../lib"
import { Hyperlink } from "../lib/Hyperlink"
import { small } from "../lib/media-queries"
import { Paragraph } from "../lib/Paragraph"

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul``

const ListItem = styled.li`
  line-height: 28px;
`

const Kudos = ({ data }) => {
  const { technologies, homepage, screens } = data
  console.log(technologies, homepage, screens)
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
          `}
        >
          Kudos
        </h1>
        <Paragraph>
          <Hyperlink color="#0967d2" href="https://kudos.aui.ma">
            Kudos
          </Hyperlink>{" "}
          is a web app that solves some problems and pains the tutoring
          department at my university was facing. It allows tutors and mentors
          to add their weekly availability according to which other students
          will book them.
        </Paragraph>
        <Paragraph>
          The project also enables the full-time employees of the department,
          through an admin platform, to keep track of all the sessions taking
          place, access statistical data, and manage the resources of the
          system.
        </Paragraph>
      </Section>
      <ImageContainer
        css={`
          margin-top: 96px;
        `}
      >
        <Image
          css={`
            width: 100%;
            height: 100%;
          `}
          alt="Kudos homepage screenshot"
          fluid={homepage.childImageSharp.fluid}
        />
      </ImageContainer>
      <Section
        css={`
          max-width: 740px;
        `}
      >
        <SectionHeading>Problem Definition and Solution</SectionHeading>
        <Paragraph>
          The department was using a previous platform to manage its resources.
          However, as more services were being offered (writing center and
          mentoring) and more requirements emerged, the old project was
          deprecated. The main reason was that the old platform was developed
          with mainly tutoring in mind and did not allow much flexbility for
          other services.
        </Paragraph>
        <Paragraph>
          The department needed a web application that would support multiple
          roles with their corresponding platforms and privileges.
          <br />
          <PrettyBold color="#0967d2">Full time employees</PrettyBold> wanted to{" "}
          <b>have access to the sessions</b> being recorded by students and{" "}
          <b>monitor</b> how much each part-time student was working. They also
          wanted automatic generation of <b>statistics</b> in order to gain more
          insights about their operations and report accordingly to executives.
          <br />
          <PrettyBold color="#0967d2">
            Student working part-time (tutors and mentors)
          </PrettyBold>{" "}
          needed a platform that would automatically{" "}
          <b>record the number of hours worked</b> and move away from recording
          on a plain excel sheet. It was also important to provide them with a
          way to <b>add their availability</b> for each week and receive an{" "}
          <b>email notification</b> whenever a student had requested them.
          <br />
          For <PrettyBold color="#0967d2">regular students</PrettyBold>, the{" "}
          <b>booking process</b> had to be fully automated and as seamless as
          possible requiring actions only from the people concerned (tutor and
          tutee for example).
        </Paragraph>
      </Section>
      <Section
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-flow: row wrap-reverse;
        `}
      >
        <div
          css={`
            display: flex;
            justify-content: center;
            flex: 1;
            margin-bottom: 32px;
            ${small} {
              flex-basis: 100%;
            }
          `}
        >
          <Image
            css={`
              width: 100%;
              height: 100%;
            `}
            alt="Technologies used"
            fixed={technologies.childImageSharp.fixed}
          />
        </div>
        <div
          css={`
            max-width: 680px;
            ${small} {
              flex-basis: 100%;
            }
          `}
        >
          <SectionHeading>Implementation</SectionHeading>
          <Paragraph>
            I used <PrettyBold color="#61DBFB">React</PrettyBold> on the
            frontend because that’s what I had the most experience with. I wish
            there was a more technical reason to why I used React instead of
            Angular or any other frontend framework, but the reality is that it
            was simply a matter of what I know and what I can be productive
            with. However, I definitely don’t regret this choice as I really
            enjoy coding in React and learning about its different concepts. The
            React ecosystem is also pretty huge and this makes it really
            attractive.
          </Paragraph>
          <Paragraph>
            I have also used <PrettyBold color="#764ABC">Redux</PrettyBold> for
            state management. I thought this would be a good choice at the
            beggining of the project, but little did I know, this would come to
            bite really hard... Unfortunately, most of the time, I found myself
            fetching data on a per-page basis, as opposed to doing complex state
            management. The time it took me to write actions, corresponding
            reducers, and selectors for something as simple as fetching new data
            when the user navigates to a new route was not really worth using
            Redux. However, lesson learned .. the hard way!
          </Paragraph>
          <Paragraph>
            Data is persisted using{" "}
            <PrettyBold color="#4DB33D">MongoDB</PrettyBold> and{" "}
            <PrettyBold color="#009639">Nginx</PrettyBold> was used as a web
            server to server the static content.
          </Paragraph>
        </div>
      </Section>
      <Section
        css={`
          max-width: 730px;
        `}
      >
        <SectionHeading>Results</SectionHeading>
        <Paragraph>
          I think this project is my most special one. For the first time, I had
          the opportunity to witness other people using something I have built.
          This was by far the most satisfying part about this project. I never
          imagined I would work on something that would be used by 2000+ users
          from my community.
        </Paragraph>
      </Section>
      <ImageContainer
        css={`
          margin-top: 96px;
        `}
      >
        <Image
          css={`
            width: 100%;
            height: 100%;
          `}
          alt="Kudos screens screenshots"
          fluid={screens.childImageSharp.fluid}
        />
      </ImageContainer>
      <Section>
        <SectionHeading>What I Learned</SectionHeading>
        <Paragraph>
          It’s really hard to fit everything I have learned in 1 or 2
          paragraphs. I dont want trying to turn this page into a blog post. So,
          in short, these are the things I have learned while working on this
          project:
        </Paragraph>
        <List>
          <ListItem>
            <PrettyBold>Client interaction:</PrettyBold> By being in direct
            contact with real-life clients, I had to make an extra effort to
            make sure we are both on the same page and to convert ideas,
            expressed in english, into technical requirements.
          </ListItem>
          <ListItem>
            <PrettyBold>Testing:</PrettyBold> It is such an integral and
            important part of software development. I wish I had tests to make
            the project more reliable. I am not very proud of it, but sometimes,
            all I could do was wish things would go my way before pushing any
            changes.
          </ListItem>
          <ListItem>
            <PrettyBold>Error tracking:</PrettyBold> It is really important and
            can save countless hours of trying to reproduce errors and
            debugging.
          </ListItem>
          <ListItem>
            <PrettyBold>State management:</PrettyBold> As of now, React, through
            the hooks and context APIs, along with React query, is probably all
            you need for state management in your app.
          </ListItem>
          <ListItem>
            <PrettyBold>Unmaterialized abstractions: </PrettyBold> I lost a lot
            of hours trying to make my solution flexible for future requirements
            ... that never came. This definitely has made me more aware of not
            trying to invest too much time optimizing or building abstractions
            for scenarios that will simply never happen.
          </ListItem>
        </List>
        <Paragraph>
          Kudos is far from being perfect. It has room for a lot of
          improvements. I wish I could invest more hours to tackle some of the
          points I previously discussed, but it has been quite challenging to
          juggle between my studies and working on Kudos. I also wish I was
          working with someone else on this. So, if you’re reading this and
          you’re from AUI, don’t hesitate to contact me if you’re interested in
          helping.
        </Paragraph>
      </Section>
    </PageLayout>
  )
}

export default Kudos

export const query = graphql`
  query KudosImagesQuery {
    technologies: file(relativePath: { eq: "technologies.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    homepage: file(relativePath: { eq: "kudos-homepage.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    screens: file(relativePath: { eq: "kudos-screens.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
