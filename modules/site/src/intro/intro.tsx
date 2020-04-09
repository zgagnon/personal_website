/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from 'react'
import {PageTitle} from '../designSystem/components/typography'
import {getGridArea} from '../designSystem/components/layout'
import {graphql} from 'gatsby'
import Img, {FixedObject, FluidObject} from "gatsby-image"

export interface IntroData {
	data: {
		file: {
			childImageSharp: {
				fixed: FixedObject | FixedObject[] | undefined
			}
		}
	}
}

const Intro: React.FC<IntroData> = ({data}) => {
	return <React.Fragment>
		<PageTitle gridArea={[1, 1, 1, 16]}>About Me</PageTitle>
		<span css={{gridArea: getGridArea([2, 3, 'bottom', 'end']), minHeight: 900}}>
			<Img
				css={{
					display: 'inline',
					float: 'right',
					marginLeft: 16,
					marginRight: 100,
				}}
				fixed={data.file.childImageSharp.fixed}
				alt="A picture of Zoe Gagnon in a modern office, smiling at the camera"/>
			I am an engineering practitioner, leader, and organizer. I'm at my best when I am helping people reach higher
			levels of their own potential. I'm as comfortable mentoring engineers through a tricky bit of code as I am guiding
			an engineering team towards iterative, continuous value delivery. I know I'm succeeding when people are more
			awesome because of me.
		<br/>
		<br/>
			My main toolkit descends from Extreme Programming, and I've picked up quite a bit of other agile techniques from
			the Modern Agile and DevOps communities as well. In every case, the most effective teams are the ones that
			iterate to discover the practices that truly allow them to make the best software in the least amount of time.

		</span>
	</React.Fragment>
}


export default Intro