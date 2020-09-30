import { Point } from "./typography"

export const MAIN_GRID_COLUMNS = '75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px  75px [end]'
export const MAIN_GRID_ROWS = '50px 32px 32px auto  1px [bottom]'

export type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 'end'
export type Row = 1 | 2 | 3 | 4 | 5 | 'bottom'

export interface GridArea {
	gridArea: [Row, Column, Row, Column]
}

export const getGridArea = (gridArea: [Row, Column, Row, Column]) => `${gridArea[0]} / ${gridArea[1]} / ${gridArea[2]} / ${gridArea[3]}`

interface SectionProps {
	title: string
}

export const Section: React.FC<SectionProps> = ({ children, title }) => {
	return (
		<div
			css={{
				display:       'flex',
				flexDirection: 'column',
				alignContent:  'space-around',
				paddingBottom: '16px',
			}}
		>
			<h2
				css={{
					display:        'flex',
					justifyContent: 'left',
					alignItems:     'center',
					height:         '40px',
					fontSize:       '32px',
					lineHeight:     '40px',
					fontFamily:     'Manjari',
				}}
			>
				{title}
			</h2>
			{children}
		</div>
	)
}

export const List:React.FC = ({children, className}) => {
	return (
		<ul
			css={{
				listStyleType:     "disc",
				listStylePosition: "inside",
			}}
			className={className}
		>
			{children}
		</ul>
	)
}