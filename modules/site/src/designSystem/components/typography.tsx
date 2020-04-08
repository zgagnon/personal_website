import React from 'react'
import {getGridArea, GridArea} from './layout'

export const PageTitle: React.FC<GridArea> = ({children, gridArea}) => {
	return (
		<h1 css={{
			textAlign: 'left',
			height: 48,
			lineHeight: '48px',
			fontFamily: 'Manjari',
			fontSize: '48px',
			width: 150,
			'@media print': {visibility: 'hidden'},
			gridArea: getGridArea(gridArea)
		}}>{children}</h1>
	)
}