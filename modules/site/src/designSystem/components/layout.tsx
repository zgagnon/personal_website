export const MAIN_GRID_COLUMNS = '75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px  75px [end]'
export const MAIN_GRID_ROWS = '50px 32px 32px auto  1px [bottom]'

export type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 'end'
export type Row = 1 | 2 | 3 | 4 | 5 | 'bottom'

export interface GridArea {
	gridArea: [Row, Column, Row, Column]
}

export const getGridArea = (gridArea: [Row, Column, Row, Column]) => `${gridArea[0]} / ${gridArea[1]} / ${gridArea[2]} / ${gridArea[3]}`