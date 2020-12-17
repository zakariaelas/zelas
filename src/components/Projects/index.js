import React from "react"
import { Project } from "../Project/Project"

export const Kudos = () => {
  return (
    <Project
      title="Kudos"
      to="/kudos"
      imageName={"kudos-main"}
      hoverColor="#0345a0"
    >
      An application to manage different services offered by the Center for
      Learning Excellence at Al Akhawayn University such as tutoring, mentoring,
      and writing center.
    </Project>
  )
}

export const Gemography = () => {
  return (
    <Project
      title="Gemography"
      to="/gemography"
      imageName={"gemography-main"}
      hoverColor="#6050dc"
    >
      I had the opportunity to intern at Gemography during the summer of 2020.
      You can read about my experience and how I believe I have learned a lot
      from working under the supervision of senior engineers.
    </Project>
  )
}

export const SessionTab = () => {
  return (
    <Project
      title="SessionTab Chrome Extension"
      to="/session-tab"
      imageName={"session-tab"}
      hoverColor="#19216C"
    >
      An unpublished chrome extension developed to help me manage the large
      number of tabs and windows I open while browsing the internet, debugging
      an issue, or studying for a class.
    </Project>
  )
}
