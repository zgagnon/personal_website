import React from 'react'
import colors from '../styles/colors'

const interactiveBaseStyle = {
	'@media print': {visibility: 'hidden'},
	display: 'block',
	borderStyle: 'solid',
	textAlign: 'center',
	borderColor: colors.darkShade,
	background: colors.brandColor,
	color: colors.darkShade,
	borderWidth: '1px',
	borderRadius: '3px',
	height: 32,
	width: 120,
	margin: '4px',
	cursor: 'pointer',
}

const PrimaryButton: React.FC = ({children, onClick}: { children: any[], onClick: () => void }) => {
	return (
		<button onClick={onClick} css={{
			...interactiveBaseStyle,
			height: `${interactiveBaseStyle.height}px`,
			width: `${interactiveBaseStyle.width}px`,
			lineHeight: `${interactiveBaseStyle.height}px`,
		}}>{children}
		</button>
	)
}

const SecondaryLink: React.FC = ({children, href}: { children: any[], href: string }) => {
	return (
		<a href={href} css={{
			...interactiveBaseStyle,
			background: colors.lightShade,
			height: `${interactiveBaseStyle.height - 2}px`,
			width: `${interactiveBaseStyle.width - 2}px`,
			lineHeight: `${interactiveBaseStyle.height - 2}px`,
			textAlign: 'center',
		}}>{children}</a>
	)
}
const print = () => {
	window.print();
}

const PageTitle: React.FC = ({children}: { children: any[] }) => {
	return (
		<h2 css={{
			fontSize: '32pt',
			fontFamily: 'Manjari',
			height: '48px',
			lineHeight: '48px',
		}}>{children}</h2>
	)
}

const ResumeSectionTitle: React.FC = ({children}: { children: any[] }) => {
	return (
		<h2 css={{
			paddingTop: '1rem',
			paddingBottom: '1rem',
			fontSize: '28pt',
			fontFamily: 'Manjari',
		}}>
			{children}
		</h2>
	)
}

const Position: React.FC = (props: { title: string, company: string, duration: string, children: any[] }) => {
	return (
		<div css={{
			paddingTop: '16px',
		}}><span css={{
			fontsize: '16pt',
		}}>
			<strong css={{fontWeight: 'bold'}}>{props.title}</strong>, {props.company} <em
			css={{fontWeight: 'italic'}}>{props.duration}</em>
		</span>
			<ul>
				{props.children}
			</ul>
		</div>)
};

const ResumeSection: React.FC = ({children}: { children: any[] }) => {
	return (
		<div>{children}</div>
	)
}

const Callout: React.FC = ({children}: { children: any[] }) => {
	return (
		<li css={{
			paddingLeft: '8px',
		}}>{'\u21A3'} {children}</li>
	)
}
const Resume = () => {
	return (
		<div css={{
			display: 'flex',
			margin: '1rem 0 0 0',
		}}>
			<div css={{marginRight: '16px', width: '152px'}}>
				<PrimaryButton onClick={print}>Print</PrimaryButton>
				<SecondaryLink href="mailto:zoe@zgagnon.com">Contact Me</SecondaryLink>
			</div>
			<div css={{display: 'flex', flexDirection: 'column', marginLeft: 32, marginRight: 32}}>
				<PageTitle>Who Am I</PageTitle>
				I'm passionate about helping teams become better versions of themselves.
				I am driven by giving people the skills, the freedom, and the safety to succeed.
				I believe that when we come together we are stronger than any one of us individually.

				<ResumeSection>
					<ResumeSectionTitle>EXPERIENCE</ResumeSectionTitle>

					<Position title="Software Engineering Manager" company="Meetup" duration="July 2018 - Apr 2020">
						<Callout>Managed a team of 12 people to deliver a new homepage experience in a highly complex cloud
							ecosystem.
						</Callout>
						<Callout>Drove adoption of modern agile and DevOps practices throughout the
							engineering organization, culminating in a new skills based promotion matrix;
							given <em>"Change the Company"</em> award.
						</Callout>
						<Callout>Helped the company migrate towards Function-as-a-Service architecture, resulting in 90% reduction
							in after-hours outages for teams which adopted.
						</Callout>
					</Position>


					<Position title="Software Engineering Manager" company="Pivotal Labs" duration="December 2017 - June 2018">
						<Callout>Managed career of engineers at Pivotal as they worked across several high-profile
							projects</Callout>
						<Callout>Lead projects across multiple teams enabling clients to deliver high-quality software more
							quickly.</Callout>
						<Callout> Developed innovative practices for cloud and micro-services based, React front end
							applications.</Callout>
					</Position>

					<Position title="Conference Organizer" company="Write/Speak/Code" duration="Sep 2017 - Current">
						<Callout> Write/Speak/Code - Global Conference Content Chair</Callout>
						<Callout> Write/Speak/Code - New York Meetup Co-Organizer, Conference Talk Selection Committee</Callout>
						<Callout> Global Diversity CFP Day - New York Co-Organizer, Workshop Facilitator</Callout>
					</Position>

					<Position title="Senior Software Engineer" company="Pivotal Labs" duration="October 2015 - November 2017">
						<Callout>Led balanced product development teams and multi-team efforts to deliver high impact software for
							Fortune 100 clients.
						</Callout>
						<Callout>Enabled developers and stakeholders in evidence-driven, value-first agile software
							development.</Callout>
						<Callout>Designed and implemented sustainable cloud based applications and platforms.</Callout>
					</Position>

					<Position title="Services Engineer" company="Tumblr" duration="November 2014 - August 2015">
						<Callout> Contributed to ongoing development of Colossus, a
							high-performance Scala micro-services
							framework.
						</Callout>
						<Callout> Created a proxy server designed to run in Amazon EC2 cloud
							services which reduced S3 transfers and lowered monthly transfer
							costs by $500,000.
						</Callout>
						<Callout> Developed a solution for real-time updates using the
							Tumblr firehose, generating over 1 million Redis increments a
							second.
						</Callout>
					</Position>

					<Position title="Scala Developer" company="Placeable" duration="October 2013 - November 2014">
						<Callout> Created a system for generic data manipulation and export
							in a Play 2.2 based service, with distribution to services such
							as Google, Yelp, and Factual.
						</Callout>
						<Callout> Developed and implemented a migration path from multiple
							Play instances to a clustered Akka actor system, using Mongo
							capped collections as an event bus.
						</Callout>
						<Callout> Wrote documentation of API for internal and external use
							in preparation for enabling third-party applications.
						</Callout>
					</Position>

					<Position title="Software Engineer" company="ClickFox" duration="Aug 2011 - Aug 2013">
						<Callout> Developed and maintained industry-leading cross-channel
							business analysis tools in Java using distributed GreenPlum
							databases and GridGain compute grids.
						</Callout>
						<Callout> Drove adoption of modern tools and practices, including
							best practices of Mercurial source control and Maven build tool,
							and integration of Jenkins build server with Redmine issue
							tracking.
						</Callout>
						<Callout> Championed usage of agile methodologies; introduced a
							two-week sprint and test driven development.
						</Callout>
					</Position>

					<Position title="Java Engineer" company="Innoprise" duration="Aug 2010 - May 2011">
						<Callout> Lead developer on a time-card entry system presented in
							the Eclipse Rich Application Platform, hosted using GlassFish
							OSGI, to integrate with the Innoprise enterprise resource
							planning tools.
						</Callout>
					</Position>

					<Position title="Lead Software Quality Assurance / Software Developer"
					          company="The Regis Company" duration="Mar 2009 - Aug 2011">
						<Callout> Developed and implemented test plans for e-learning
							software. Testing involved creating test scripts on GUI
							intensive applications, and exploratory testing in identified
							problem areas.
						</Callout>
						<Callout> Added Section 508 Accessibility compliance to a SCORM
							framework in ActionScript 3.
						</Callout>
						<Callout> Created tools to quickly visualize XML configuration files
							using Java 6.
						</Callout>
					</Position>
				</ResumeSection>

				<ResumeSection>
					<ResumeSectionTitle>EDUCATION</ResumeSectionTitle>
					Bachelor of Science, Computer Science
					Metropolitan State University of Denver, Denver CO, 2010 Minor: Mathematics
				</ResumeSection>

				<ResumeSection>
					<ResumeSectionTitle>Public Speaking</ResumeSectionTitle>
					<ul>
						<li>QCon - Inside Job, June 2019</li>
						<li>Fullstack Academy Manager Panel - Panelist, May 2019</li>
						<li>Women Who Code Connect - Micro and Mono, Mar 2019</li>
						<li> Global Diversity CFP Day - Workshop Facilitator, Mar 2019</li>
						<li> Global Diversity CFP Day - Workshop Facilitator, Jan 2018</li>
						<li> Spring One Conference - Solid In The Wild, Dec 2017</li>
						<li> Write Speak Code - Workshop facilitator, Nov 2017</li>
						<li> Pivotal Tech Talk Tuesdays - Introduction to Reactive Streams, Jun 2017</li>
						<li> She Says Horror Stories 2 - Panelist, Oct 2016</li>
						<li> CODE Debugging the Gender Gap Screening - Panelist, May 2016</li>
					</ul>
				</ResumeSection>

				<ResumeSection>
					<ResumeSectionTitle>Text Media</ResumeSectionTitle>
					<ul>
						<li> Being Your Authentic Self - Interview, Built To Adapt</li>
						<li> Asking for Gender in Applications - Article, Built To Adapt</li>
					</ul>
				</ResumeSection>

				<ResumeSection>
					<ResumeSectionTitle>Audio</ResumeSectionTitle>
					<ul>
						<li>Interview - From the Source Podcast</li>
						<li>Interview - StemOnFire Podcast</li>
					</ul>
				</ResumeSection>

				<ResumeSection>
					<ResumeSectionTitle>GROUPS AND ACTIVITIES</ResumeSectionTitle>
					<ul>
						<li> Codebar.io - Coach</li>
						<li> Interests: Clothing design, French cooking and baking.</li>
					</ul>
				</ResumeSection>
			</div>
		</div>
	)
}

export default Resume