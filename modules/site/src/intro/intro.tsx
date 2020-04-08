/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from 'react'
import {PageTitle} from '../designSystem/components/typography'



const intro = () => {
	return <React.Fragment>
		<PageTitle gridArea={[1, 1, 1, 16]}>Intro</PageTitle>
		<span css={{gridArea: '2 / 3 / bottom / end'}}>
			I'm passionate about helping teams become better versions of themselves.
		I am driven by giving people the skills, the freedom, and the safety to succeed.
		I believe that when we come together we are stronger than any one of us individually.
		</span>
	</React.Fragment>
}

export default intro