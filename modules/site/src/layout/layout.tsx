/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React, {Fragment} from 'react'
import Header from "./header";
import colors from "../styles/colors";


const Layout = ({ children }:{children: any[]}) => {
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
        body {
            background: '#f7f9ff';
            }
      }`}/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={{
          border: `1px solid ${colors.accent}`,
          height: '.2rem',
          background: colors.accent,
        }}/>
      <div
        css={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,

        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
