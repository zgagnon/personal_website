/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import colors from "../styles/colors";

const Header = ({siteTitle}) => (
  <header
    css={{
      background: colors.accentBackground,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      css={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}

    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          css={{
            color: colors.accentText,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
