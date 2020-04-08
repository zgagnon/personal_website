/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {Link} from "gatsby"
import React from "react"
import colors from "../designSystem/colors";

interface NavLinkProps {
	column: number
	to: string
}

const NavLink: React.FC<NavLinkProps> = ({column, to, children}) => {
	return (
		<Link to={to}
		      css={{
			      color: colors.darkShade,
			      fontSize: '18px',
			      fontFamily: 'Manjari',
			      gridColumnStart: column,
			      gridRowStart: 2,
			      '@media print': {visibility: 'hidden'},
		      }}>
			{children}
		</Link>
	)
}

const Header = (props: { siteTitle: string }) => (
	<header
		css={{
			background: colors.brandColor,
		}}>
		<div
			css={{
				maxWidth: 1200,
				margin: '0 auto',
				display: 'grid',
				paddingTop: 16,
				gridTemplateColumns: '75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px 75px',
				gridTemplateRows: '54px 18px',
				alignItems: 'center',
			}}>
			<h1
				css={{
					gridColumnStart: 1,
					gridColumnEnd: 8,
				}}>
				<Link
					to="/"
					css={{
						color: colors.darkShade,
						textDecoration: `none`,
						fontSize: '54px',
						fontFamily: 'Manjari',
					}}>
					{
						props.siteTitle
					}
				</Link>
			</h1>
			<NavLink to="/" column={15}> Home </NavLink>
			<NavLink to="/resume" column={16}>Resume</NavLink>
		</div>
		< div css={{
			marginTop: 8,
			border: `1px solid ${colors.lightAccent}`,
			height: '4px',
			background: colors.lightAccent,
			pageBreakAfter: 'avoid',
		}}/>
	</header>
)

export default Header
