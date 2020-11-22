import React from "react"
import SEO from "../components/seo"
import { keyframes } from "styled-components"
import styled from "styled-components/macro"
import { Project } from "../components/Project"
import KudosImg from "../assets/images/kudos-main.png"
import Blob from "../assets/images/blob.svg"
import GemographyImg from "../assets/images/gemography-main.png"
import { PageLayout } from "../components/PageLayout"
import { large, small } from "../lib/media-queries"
import { ProjectRow } from "../components/Project"

const MainHeading = styled.h1`
  font-size: 64px;
  font-weight: bold;
  line-height: 96px;
  margin: 0;
  padding: 0;
  ${small} {
    font-size: 48px;
    line-height: 80px;
  }
  color: var(--color-primary-main);
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color-primary-main);
`

const Page = styled.div`
  ${large} {
    background: url(${Blob});
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const Paragraph = styled.p`
  display: block;
  font-size: 16px;
  line-height: 38px;
  margin: 0;
  margin-top: 26px;
  ${small} {
    line-height: 38px;
  }
`

const Bio = styled.div`
  max-width: 730px;
`

const SlideFromTop = keyframes`
0%{
  opacity: 0.8;
  transform: translateY(-300px);
}
100%{
  opacity: 1;
  transform: translateY(0px);
}
`

const SlideFromBottom = keyframes`
    0% {
      opacity: 0;
      transform: translateY(300px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
`

const SectionTitle = styled.h2`
  font-size: 40px;
  line-height: 48px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 32px;
`

const SlideFromLeft = keyframes`
    0%{
      opacity: 0.8;
      transform: translate(-300px);
    }
    100%{
      opacity: 1;
      transform: translate(0px);
    }
`
const SlideFromRight = keyframes`
    0%{
      opacity: 0.8;
      transform: translate(300px);
    }
    100%{
      opacity: 1;
      transform: translate(0px);
    }
`

export default function Home() {
  return (
    <Page>
      <PageLayout>
        <SEO />
        <div
          css={`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <div
            css={`
              padding-top: 128px;
              min-height: 90vh;
              ${small} {
                padding-top: 64px;
              }
            `}
          >
            <MainHeading>
              <span
                css={`
                  display: inline-block;
                  animation: 0.5s ease ${SlideFromLeft} forwards;
                `}
              >
                Hello,
              </span>
              <span> </span>
              <span
                css={`
                  display: inline-block;
                  animation: 0.5s ease ${SlideFromRight} forwards;
                `}
              >
                I'm{" "}
                <span
                  css={`
                    -webkit-text-fill-color: var(--color-primary-main);
                  `}
                >
                  Zakaria
                </span>
              </span>
              <span
                css={`
                  display: inline-block;
                  animation: 0.5s ease ${SlideFromTop} forwards;
                  -webkit-text-fill-color: var(--color-primary-main);
                `}
              >
                .
              </span>
            </MainHeading>
            <Bio>
              <Paragraph>
                I’m currently pursuing a Bachelor’s degree in computer science
                at university. Although I have a love-hate relationship with
                university, I really enjoy the exposure to various topics in
                computer science. When I’m not busy studying, I love designing
                and implementing interfaces, architecting solutions, and
                building products. I also take pleasure in demistifying
                abstractions and understanding how things work under the hood.
                Although I usually fail at the latter taks, I enjoy trying.
                <br />
              </Paragraph>
            </Bio>
          </div>
        </div>
        <div
          css={`
            margin-top: 32px;
            ${small} {
              margin-top: 64px;
            }
          `}
        >
          <SectionTitle>
            <a id="projects"></a>My Work
          </SectionTitle>
          <Paragraph
            css={`
              max-width: 750px;
              font-size: 18px !important;
            `}
          >
            Throughout my developer journey, I have invested some of my time
            building applications, getting professional experience, and writing
            articles. Feel free to take some time to go through my projects.
          </Paragraph>
          <ProjectRow
            css={`
              margin-top: 64px;
              margin-bottom: 128px;
            `}
          >
            <Project
              title="Kudos"
              to="/kudos"
              image={KudosImg}
              description={
                "An application to manage different services offered by the Center for Learning Excellence at Al Akhawayn University such as tutoring, mentoring, and writing center."
              }
              hoverColor="#0345a0"
            />
            <Project
              title="Gemography"
              to="/gemography"
              image={GemographyImg}
              description={
                "I had the opportunity to intern at Gemography during the summer of 2020. You can read about my experience and how I believe I have learned a lot from working under the supervision of senior engineers."
              }
              hoverColor="#6050dc"
            />
          </ProjectRow>
        </div>
      </PageLayout>
    </Page>
  )
}
