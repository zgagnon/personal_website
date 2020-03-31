import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h2>Who am I</h2>
    I'm passionate about helping teams become better versions of themselves.
    I am driven by giving people the skills, the freedom, and the safety to succeed.
    I believe that when we come together we are stronger than any one of us individually.

    <h2>EXPERIENCE</h2>
    Software Engineering Manager, Meetup July 2018 - Apr 2020
    <ul>
      <li>Managed a team of 12 people to deliver in a highly complex cloud ecosystem.
      </li>
      <li>Drove adoption of modern agile and DevOps practices throughout the
        engineering organization, culminating in a new skills based promotion matrix;
        awarded <em>"Change the Company"</em> award.
      </li>
      <li>Architected modern cloud-native software based on Functions-as-a-Service</li>
    </ul>

    Software Engineering Manager, Pivotal Labs December 2017 - June 2018
    <ul>
      <li> Coached two software engineers in advancing their careers.</li>
      <li> Worked to advance agile and engineering practices both within and without the company.</li>
      <li> Developed innovative practices for cloud and micro-services based, React front end applications.</li>
    </ul>

    Senior Software Engineer, Pivotal Labs October 2015 - November 2017
    Pivotal, New York
    <ul>
      <li>Lead balanced product development teams and multi-team efforts to deliver high impact software for
        Fortune 100 clients.
      </li>
      <li>Enabled developers and stakeholders in evidence-driven, value-first agile software development.</li>
      <li>Designed and implemented sustainable cloud based applications and platforms.</li>
    </ul>


    Services EngineerNovember 2014 - August 2015
    Tumblr, New York NY
    <ul>
      <li> Contributed to ongoing development of Colossus, a
        high-performance Scala micro-services
        framework.
      </li>
      <li> Created a proxy server designed to run in Amazon EC2 cloud
        services which reduced S3 transfers and lowered monthly transfer
        costs by one sixth.
      </li>
      <li> Developed a solution for real-time updates using the
        Tumblr firehose, generating over 1 million Redis increments a
        second.
      </li>
    </ul>

    Scala Developer October 2013 - November 2014
    Placeable, Denver CO
    <ul>
      <li> Created a system for generic data manipulation and export
        in a Play 2.2 based service, with distribution to services such
        as Google, Yelp, and Factual.
      </li>
      <li> Developed and implemented a migration path from multiple
        Play instances to a clustered Akka actor system, using Mongo
        capped collections as an event bus.
      </li>
      <li> Wrote documentation of API for internal and external use
        in preparation for enabling third-party applications.
      </li>
    </ul>

    Software Engineer Aug 2011 - Aug 2013
    ClickFox, Denver CO
    <ul>
      <li> Developed and maintained industry-leading cross-channel
        %business analysis tools in Java using distributed GreenPlum
        %databases and GridGain compute grids.
      </li>
      <li> Drove adoption of modern tools and practices, including
        best practices of Mercurial source control and Maven build tool,
        and integration of Jenkins build server with Redmine issue
        tracking.
      </li>
      <li> Championed usage of agile methodologies; intrudoced a
        two-week sprint and test driven development.
      </li>
    </ul>

    Java Engineer Aug 2010- May 2011
    Innoprise Software, Broomfield CO
    <ul>
      <li> Lead developer on a time-card entry system presented in
        the Eclipse Rich Application Platform, hosted using GlassFish
        OSGI, to integrate with the Innoprise enterprise resource
        planning tools.
      </li>
    </ul>

    Lead Software Quality Assurance / Software Developer Mar 2009 - Aug 2011
    Regis Learning Solutions, Inc (now The Regis Company), Golden CO
    <ul>
      <li> Developed and implemented test plans for e-learning
        software. Testing involved creating test scripts on GUI
        intensive applications, and exploratory testing in identified
        problem areas.
      </li>
      <li> Added Section 508 Accessibility compliance to a SCORM
        framework in ActionScript 3.
      </li>
      <li> Created tools to quickly visualize XML configuration files
        using Java 6.
      </li>
    </ul>

    <h2>EDUCATION</h2>
    Bachelor of Science, Computer Science
    Metropolitan State University of Denver, Denver CO, 2010 Minor: Mathematics

    <h2>Public Speaking</h2>
    <ul>
      <li>QCon - Inside Job, June 2019</li>
      <li>Women Who Code Connect - Micro and Mono, Mar 2019</li>
      <li> Global Diversity CFP Day - Workshop Facilitator, Mar 2019</li>
      <li> Global Diversity CFP Day - Workshop Facilitator, Jan 2018</li>
      <li> Spring One Conference - Solid In The Wild, Dec 2017</li>
      <li> Write Speak Code - Workshop facilitator, Nov 2017</li>
      <li> Pivotal Tech Talk Tuesdays - Introduction to Reactive Streams, Jun 2017</li>
      <li> She Says Horror Stories 2 - Panelist, Oct 2016</li>
      <li> CODE Debugging the Gender Gap Screening - Panelist, May 2016</li>
    </ul>

    <h2>Text Media</h2>
    <ul>
      <li> Being Your Authentic Self - Interview, Built To Adapt</li>
      <li> Asking for Gender in Applications - Article, Built To Adapt</li>
    </ul>

    <h2>Audio</h2>

    <h2>GROUPS AND ACTIVITIES</h2>
    <ul>
      <li> Write/Speak/Code - Global Conference Content Chair</li>
      <li> Write/Speak/Code - New York Meetup Co-Organizer, Conference Talk Selection Committee</li>
      <li> Global Diversity CFP Day - New York Co-Organizer, Workshop Facilitator</li>
      <li> Codebar.io - Coach</li>
      <li> Interests: Clothing design, French cooking and baking.</li>
    </ul>
  </Layout>
);

export default IndexPage
