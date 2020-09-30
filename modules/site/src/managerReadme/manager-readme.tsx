import React                                       from 'react'
import { PageTitle, Paragraph, Point, Subsection } from "../designSystem/components/typography"
import { getGridArea, List, Section }              from "../designSystem/components/layout"
import Resume                                      from "../resume/resume"

const ManagerReadme: React.FC = () => {
  const buffer = {
    marginTop: 16,
  }
  return (
    <>
      <PageTitle gridArea={[ 1, 1, 2, 2 ]}>README</PageTitle>
      <div
        css={{
          gridArea: getGridArea([ 2, 3, 'bottom', 'end' ])
        }}
      >
        <div
          css={{
            gridArea:       getGridArea([ 2, 3, 4, 'end' ]),
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'center',
            alignItems:     'left',
            marginLeft:     32,
            marginRight:    32,
            marginBottom:   32,
            '@media print': {
              orphans: 2,
            }
          }}
        >
          <Paragraph>
            So! I'm a people manager. You are probably wondering what that means.
            Maybe it's because I'm <strong>your</strong> people manager for the moment.
            Maybe it's because you want to steal this content for yourself (that's too much
            pressure for me). Regardless, read on to see some of my idea of management.
          </Paragraph>

        </div>
        <div
          css={{
            gridArea:       getGridArea([ 3, 1, 'bottom', 'end' ]),
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'center',
            alignItems:     'left',
            marginLeft:     32,
            marginRight:    32,
            '@media print': {
              orphans: 2,
            }
          }}
        >
          <Section title="Theory of Management">
            <Paragraph
            >
              My theory of management focuses on providing value in several directions. I aim to do this by providing
              mentoring, coaching, and sponsorship while helping align personal growth goals with business goals. I
              firmly believe that my success as a manager is directly tied to the success of people I coach.
            </Paragraph>
            <Paragraph>
              I believe that any successful system must be human-centric, and that includes the business relationships
              inherent in management. I hold to a set of values, and seek to have my practices always descend from and
              reinforce those values. Additionally, I believe that "a bad system can beat a good person", and direct my
              efforts to increasing autonomy, safety, and support of individuals by the system they operate in.
            </Paragraph>
          </Section>
          <Section title="Values And Practices">
            <Paragraph>
              I'm an agilist at heart, and my values directly relate to that. The formulation I like best right now is
              the <a href="https://medium.com/agile-insights/modern-agile-what-is-it-and-why-is-it-a-great-thing-66ae7821a722">
              Modern Agile Values </a>. The specific practices I put in place are derived from and contribute to those
              values.
            </Paragraph>
            <Subsection
              title="Make Safety a Prerequisite"
              css={buffer}
            >
              Safety is a broad concept covering not just physical safety, but psychological and process as well. I
              strive to create environments where people can comfortably contribute. This means being transparent,
              predictable, welcoming, and reliable.
              <Point
                title="Practices"
                css={buffer}
              >
                <List
                >
                  <li>
                    Least Surprise: I work to minimize surprises to all of those around me. In a management position,
                    there are laws and corporate policies that prevent me from being fully transparent, but I pledge
                    to always do my best to not surprise people.
                  </li>
                  <li>
                    Calling In: I work to make environments I am in more comfortable for everyone. That includes
                    helping people learn more welcoming modes of interaction. I'm not afraid to identify harmful
                    behaviors that I see, and try to provide more inclusive alternatives.
                  </li>
                  <li>
                    Growth Mindset: I accept and promote the understanding that learning derives from a cycle of
                    attempt, failure, and adjustment. I work to celebrate, and help others celebrate, this cycle. This
                    includes turning failure to success through recognizing and internalizing the lessons it presents.
                  </li>
                  <li>
                    Feedback Seeking: I acknowledge that I will not always succeed at living up to my values,
                    and that there are better practices that I have yet to learn. I am constantly seeking feedback and
                    working to receive that feedback gracefully.
                  </li>
                  <li>
                    Give Ownership, take responsibility: It's much easier to succeed when people explicitly have
                    ownership over their work. I look for opportunities to clarify ownership and divest it to people
                    with the most information and stake. Conversely, I take responsibility for my own work, sphere, and
                    actions. When an effort is less successful, I own my part in that.
                  </li>
                </List>
              </Point>
            </Subsection>
            <Subsection
              title="Make People Awesome"
              css={buffer}
            >
              People are the only ingredient in any organization, and the strength and success of that organization
              depends on the contributions of those people. I believe processes, tools, or policies that don't
              contribute
              to making people more awesome tend to decrease the overall effectiveness of the organization instead.
              <Point
                title="Practices"
                css={{
                  marginTop: 8,
                }}
              >
                <List>
                  <li>Feedback Delivery: Feedback is a core ingredient in learning and growing. Particularly as a
                    manager, I am well placed to facilitate this. I work to regularly gather feedback on behalf of
                    people I am coaching, synthesize that feedback to derive useful trends, and deliver that feedback in
                    a kind, candid way.
                  </li>
                  <li>
                    Sponsorship: I believe that growth happens through confronting challenges and learning to overcome
                    them. I work to identify opportunities for growth and to sponsor people into those opportunities.
                  </li>
                  <li>
                    Support: Confronting challenges is only possible with proper support. I work to provide people
                    with the resources, both physical and knowledge, that they need to succeed.
                  </li>
                </List>
              </Point>
            </Subsection>
            <Subsection
              title="Deliver Value Continuously"
              css={buffer}
            >
              We come together to accomplish our goals, and I want to always be directing my energy towards that end.
              I am value-focused, always checking my course to ensure that it is worth pursuing. I am outward focused,
              working for others in addition to myself. I believe in capturing incremental value; even a
              work-in-progress
              is better than nothing.
              <Point
                title="Practices"
                css={{
                  marginTop: 8,
                }}
              >
                <List>
                  <li>
                    Re-evaluate: I work to question and re-evaluate my efforts, practices, and values. When I am doing
                    something that is no longer delivering value, I try to stop doing it. I look for new values,
                    practices,
                    or techniques which can provide more value.
                  </li>
                  <li>
                    Launch early and learn: I don't like to let value sit on a shelf. When I'm working on something, I
                    try to share it as soon as it can provide value, even if that value is partial. This helps me to
                    get the most from my efforts, and gives me more opportunities to learn and experiment.
                  </li>
                </List>
              </Point>
            </Subsection>
            <Subsection
              title="Experiment and Learn Rapidly"
              css={buffer}
            >
              Most of the activities I do will be activities I am not good at. The the goal of systems, particularly
              software systems, is to reduce the burden of activities as you become better at them. This means that most
              of the time, I will be doing things for the first time. This is particularly true when it comes to working
              with individuals. I will always be learning more about the people I work with

              <Point
                title="Practices"
                css={buffer}
              >
                <List>
                  <li>
                    Try courageously: I work to identify new things to try, and to keep an open mind to suggestions from
                    others. I also work to accept that not everything we try will be successful or work on the first
                    time.
                    Once a new try is identified, I like to move on it quickly, in order to learn as soon as possible.
                  </li>
                  <li>
                    Steal shamelessly: I'm always looking for good ideas. I read and listen to others, and whenever
                    there is something I think could work, I like to try it out. I'm not ashamed to incorporate
                    other's thinking into my own (with credit, of course)
                  </li>
                  <li>
                    Small bites: I prefer to work in small iterations that allow for rapid feedback cycles. A lot of my
                    specific techniques and goals are about reducing feedback cycles in order to get the most learning.
                  </li>
                </List>
              </Point>
            </Subsection>
          </Section>
        </div>
      </div>
    </>
  )
}

export default ManagerReadme