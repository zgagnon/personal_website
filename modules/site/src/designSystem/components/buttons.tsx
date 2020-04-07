/** @jsx jsx */
import {jsx} from '@emotion/core'

import colors from '../colors'
import * as React from 'react'

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

interface ButtonProps {
	onClick: () => void
}

export const PrimaryButton: React.FC<ButtonProps> = ({children, onClick}) => {
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

interface AnchorProps {
	href: string
}

export const SecondaryLink: React.FC<AnchorProps> = ({children, href}) => {
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