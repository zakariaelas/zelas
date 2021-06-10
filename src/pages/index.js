import React from "react"
import styled from "styled-components/macro"
import Blob from "../assets/images/blob.svg"
import { PageLayout } from "../components/PageLayout"
import { ProjectRow } from "../components/Project"
import { Gemography, Kudos, SessionTab, PeelingRage } from "../components/Projects"
import SEO from "../components/seo"
import { SlideFromLeft, SlideFromRight, SlideFromTop } from "../lib/Animations"
import { large, small } from "../lib/media-queries"
import { egg } from "../utils/easter-egg"

export default function Home() {
  egg()
  return (
    <Page>
      <PageLayout>
        <SEO />
        <div
          css={`
            display: flex;
            justify-content: flex-end;
            padding-top: 128px;
            min-height: 90vh;
            ${small} {
              padding-top: 64px;
            }
          `}
        >
          <div>
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
                {" "}
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
            <a href="#projects" id="projects">My Work</a>
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
            <Kudos />
            <Gemography />
            <SessionTab />
            <PeelingRage />
          </ProjectRow>
        </div>
      </PageLayout>
    </Page>
  )
}

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

const SectionTitle = styled.h2`
  font-size: 40px;
  line-height: 48px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 32px;
`
