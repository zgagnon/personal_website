/** @jsx jsx */
import { jsx } from "@emotion/react"

import * as React from "react"
import { PrimaryButton } from "../designSystem/components/buttons"
import { PageTitle } from "../designSystem/components/typography"
import { getGridArea, Section } from "../designSystem/components/layout"

const print = () => {
  window.print()
}

interface PositionProps {
  title: string
  company: string
  duration: string
}

const CalloutListStyles = {
  paddingBottom: 16,
}

const Position: React.FC<PositionProps> = props => {
  return (
    <div css={CalloutListStyles}>
      <span
        css={{
          fontsize: "16pt",
        }}
      >
        <strong css={{ fontWeight: "bold" }}>{props.title}</strong>,{" "}
        {props.company} <em css={{ fontWeight: "italic" }}>{props.duration}</em>
      </span>
      <ul>{props.children}</ul>
    </div>
  )
}

const CalloutList: React.FC = props => {
  return <ul css={{ CalloutListStyles }}>{props.children}</ul>
}

const Callout: React.FC = ({ children }) => {
  return (
    <li
      css={{
        paddingLeft: "8px",
      }}
    >
      {"\u21A3"} {children}
    </li>
  )
}
const Resume = () => {
  return (
    <React.Fragment>
      <PageTitle gridArea={[1, 1, 2, 2]}>Resume</PageTitle>
      <PrimaryButton onClick={print} localCss={{ gridArea: "2 / 1 / 2 / 2" }}>
        Print
      </PrimaryButton>
      <div
        css={{
          gridArea: getGridArea([2, 3, "bottom", "end"]),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
          marginLeft: 32,
          marginRight: 32,
          "@media print": {
            orphans: 2,
          },
        }}
      >
        <Section title="EXPERIENCE">
          <Position
            title="Software Engineering Manager"
            company="Meetup"
            duration="July 2018 - Apr 2020"
          >
            <Callout>
              Managed a team of 12 people to deliver a new homepage experience
              in a highly complex cloud ecosystem.
            </Callout>
            <Callout>
              Drove adoption of modern agile and DevOps practices throughout the
              engineering organization, culminating in a new skills based
              promotion matrix; given <em>"Change the Company"</em> award.
            </Callout>
            <Callout>
              Helped the company migrate towards Function-as-a-Service
              architecture, resulting in 90% reduction in after-hours outages
              for teams which adopted.
            </Callout>
          </Position>

          <Position
            title="Software Engineering Manager"
            company="Pivotal Labs"
            duration="December 2017 - June 2018"
          >
            <Callout>
              Managed career of engineers at Pivotal as they worked across
              several high-profile projects
            </Callout>
            <Callout>
              Lead projects across multiple teams enabling clients to deliver
              high-quality software more quickly.
            </Callout>
            <Callout>
              {" "}
              Developed innovative practices for cloud and micro-services based,
              React front end applications.
            </Callout>
          </Position>

          <Position
            title="Board Member"
            company="Write/Speak/Code"
            duration="Dec 2018 - Nov 2019"
          >
            <Callout>
              {" "}
              Write/Speak/Code - Global Conference Content Chair
            </Callout>
            <Callout>
              {" "}
              Write/Speak/Code - New York Meetup Co-Organizer, Conference Talk
              Selection Committee
            </Callout>
            <Callout>
              {" "}
              Global Diversity CFP Day - New York Co-Organizer, Workshop
              Facilitator
            </Callout>
          </Position>

          <Position
            title="Senior Software Engineer"
            company="Pivotal Labs"
            duration="October 2015 - November 2017"
          >
            <Callout>
              Led balanced product development teams and multi-team efforts to
              deliver high impact software for Fortune 100 clients.
            </Callout>
            <Callout>
              Enabled developers and stakeholders in evidence-driven,
              value-first agile software development.
            </Callout>
            <Callout>
              Designed and implemented sustainable cloud based applications and
              platforms.
            </Callout>
          </Position>

          <Position
            title="Services Engineer"
            company="Tumblr"
            duration="November 2014 - August 2015"
          >
            <Callout>
              {" "}
              Contributed to ongoing development of Colossus, a high-performance
              Scala micro-services framework.
            </Callout>
            <Callout>
              {" "}
              Created a proxy server designed to run in Amazon EC2 cloud
              services which reduced S3 transfers and lowered monthly transfer
              costs by $500,000.
            </Callout>
            <Callout>
              {" "}
              Developed a solution for real-time updates using the Tumblr
              firehose, generating over 1 million Redis increments a second.
            </Callout>
          </Position>

          <Position
            title="Scala Developer"
            company="Placeable"
            duration="October 2013 - November 2014"
          >
            <Callout>
              {" "}
              Created a system for generic data manipulation and export in a
              Play 2.2 based service, with distribution to services such as
              Google, Yelp, and Factual.
            </Callout>
            <Callout>
              {" "}
              Developed and implemented a migration path from multiple Play
              instances to a clustered Akka actor system, using Mongo capped
              collections as an event bus.
            </Callout>
            <Callout>
              {" "}
              Wrote documentation of API for internal and external use in
              preparation for enabling third-party applications.
            </Callout>
          </Position>

          <Position
            title="Software Engineer"
            company="ClickFox"
            duration="Aug 2011 - Aug 2013"
          >
            <Callout>
              {" "}
              Developed and maintained industry-leading cross-channel business
              analysis tools in Java using distributed GreenPlum databases and
              GridGain compute grids.
            </Callout>
            <Callout>
              {" "}
              Drove adoption of modern tools and practices, including best
              practices of Mercurial source control and Maven build tool, and
              integration of Jenkins build server with Redmine issue tracking.
            </Callout>
            <Callout>
              {" "}
              Championed usage of agile methodologies; introduced a two-week
              sprint and test driven development.
            </Callout>
          </Position>

          <Position
            title="Java Engineer"
            company="Innoprise"
            duration="Aug 2010 - May 2011"
          >
            <Callout>
              {" "}
              Lead developer on a time-card entry system presented in the
              Eclipse Rich Application Platform, hosted using GlassFish OSGI, to
              integrate with the Innoprise enterprise resource planning tools.
            </Callout>
          </Position>

          <Position
            title="Lead Software Quality Assurance / Software Developer"
            company="The Regis Company"
            duration="Mar 2009 - Aug 2011"
          >
            <Callout>
              {" "}
              Developed and implemented test plans for e-learning software.
              Testing involved creating test scripts on GUI intensive
              applications, and exploratory testing in identified problem areas.
            </Callout>
            <Callout>
              {" "}
              Added Section 508 Accessibility compliance to a SCORM framework in
              ActionScript 3.
            </Callout>
            <Callout>
              {" "}
              Created tools to quickly visualize XML configuration files using
              Java 6.
            </Callout>
          </Position>
        </Section>

        <Section title="EDUCATION">
          <span css={{ paddingBottom: "8px" }}>
            Bachelor of Science, Computer Science
            <br />
            Minor: Mathematics
            <br />
            Metropolitan State University of Denver, Denver CO, 2010
          </span>
        </Section>
        <div css={{ "@media print": { pageBreakAfter: "always" } }} />
        <Section title="PUBLIC SPEAKING">
          <CalloutList>
            <Callout>QCon - Inside Job, June 2019</Callout>
            <Callout>
              Fullstack Academy Manager Panel - Panelist, May 2019
            </Callout>
            <Callout>Women Who Code Connect - Micro and Mono, Mar 2019</Callout>
            <Callout>
              {" "}
              Global Diversity CFP Day - Workshop Facilitator, Mar 2019
            </Callout>
            <Callout>
              {" "}
              Global Diversity CFP Day - Workshop Facilitator, Jan 2018
            </Callout>
            <Callout>
              {" "}
              Spring One Conference - Solid In The Wild, Dec 2017
            </Callout>
            <Callout>
              {" "}
              Write Speak Code - Workshop facilitator, Nov 2017
            </Callout>
            <Callout>
              {" "}
              Pivotal Tech Talk Tuesdays - Introduction to Reactive Streams, Jun
              2017
            </Callout>
            <Callout> She Says Horror Stories 2 - Panelist, Oct 2016</Callout>
            <Callout>
              {" "}
              CODE Debugging the Gender Gap Screening - Panelist, May 2016
            </Callout>
          </CalloutList>
        </Section>

        <Section title="TEXT MEDIA">
          <CalloutList>
            <Callout>
              {" "}
              Being Your Authentic Self - Interview, Built To Adapt
            </Callout>
            <Callout>
              {" "}
              Asking for Gender in Applications - Article, Built To Adapt
            </Callout>
          </CalloutList>
        </Section>

        <Section title="AUDIO">
          <CalloutList>
            <Callout>Interview - From the Source Podcast</Callout>
            <Callout>Interview - StemOnFire Podcast</Callout>
          </CalloutList>
        </Section>

        <Section title="GROUPS AND ACTIVITIES">
          <CalloutList>
            <Callout> Codebar.io - Coach</Callout>
            <Callout>
              {" "}
              Interests: Clothing design, French cooking and baking.
            </Callout>
          </CalloutList>
        </Section>
      </div>
    </React.Fragment>
  )
}

export default Resume
