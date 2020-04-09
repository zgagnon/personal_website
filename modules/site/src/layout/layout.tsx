/** @jsx jsx */
import {css, jsx, Global} from '@emotion/core'
import emotionReset from 'emotion-reset';
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import React, {Fragment} from 'react'
import Header from "./header";
import colors from "../designSystem/colors";
import "./normalize.css"
import {MAIN_GRID_COLUMNS, MAIN_GRID_ROWS} from '../designSystem/components/layout'


const Layout = ({children}: { children: any[] }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

	return (
		<Fragment>
			<Global
				styles={css`
        ${emotionReset}
        body {
            background: ${colors.lightShade};
            font-family: "Montserrat-Light";
            color: ${colors.darkShade};
            font-size: 14pt;
            line-height: 150%;
            }
      }`}/>
			<Header siteTitle={data.site.siteMetadata.title}/>

			<div
				css={{
					maxWidth: 1200,
					margin: '0 auto',
					paddingTop: 16,
					paddingBottom: 16,
					pageBreakBefore: 'avoid',
				}}
			>
				<main css={{
					display: 'grid',
					gridTemplateColumns: MAIN_GRID_COLUMNS,
					gridTemplateRows: MAIN_GRID_ROWS,
					alignItems: 'start',
				}}>{children}</main>
			</div>

			<footer css={{
				background: colors.lightAccent,
				position: 'relative',
				height: 80,
				'@media print': {
					visibility: 'hidden',
				}
			}}>
       <span css={{
	       position: 'absolute',
	       bottom: 8,
	       right: 16,
       }}> © {new Date().getFullYear()}, Built with
	       {` `}
	       <a href="https://www.gatsbyjs.org">Gatsby</a>
       </span>
			</footer>
		</Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
