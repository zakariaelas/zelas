import { Link } from "gatsby"
import React from "react"
import styled from "styled-components/macro"
import RightIcon from "../../assets/icons/right.svg"
import { small } from "../../lib/media-queries"

const Paragraph = styled.p`
  font-size: 16px;
  margin: 0;
  margin-top: 24px;
  padding: 0;
  line-height: 32px;
`

const Title = styled.h3`
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: all 0.2s ease-out;
`

const ImageContainer = styled.div`
  margin: 0;
  margin-top: 32px;
  flex: 1;
  transition: all 0.2s;
`

const ProjectLink = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
  transition: transform 0.4s ease-out;
  padding-bottom: 5px;
`

const Container = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  flex: 1;
  &:last-child {
    margin-right: 0;
  }
  &:hover ${ImageContainer} {
    transform: translateY(-10px);
  }
  &:hover ${ProjectLink} svg {
    transform: translateX(5px);
  }
  &:hover ${ProjectLink} {
    border-bottom: 2px solid #000;
  }
  &:hover ${Title} {
    color: ${props => props.hoverColor};
  }
  ${small} {
    flex-basis: 100%;
    margin-right: 0;
  }
`

export const Project = ({ title, image, description, to, hoverColor }) => {
  return (
    <Container hoverColor={hoverColor}>
      <Link title={title} to={to}>
        <Title>{title}</Title>
      </Link>
      <Link title={title} to={to}>
        <ImageContainer>
          <img
            css={`
              width: 100%;
              height: 100%;
              border-radius: 10px;
            `}
            src={image}
          />
        </ImageContainer>
      </Link>
      <Paragraph>{description}</Paragraph>
      <Link title={title} to={to}>
        <ProjectLink>
          Read More{" "}
          <RightIcon
            css={`
              transition: all 0.2s ease-in;
            `}
          />
        </ProjectLink>
      </Link>
    </Container>
  )
}
