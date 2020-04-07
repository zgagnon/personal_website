/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {Link} from "gatsby"
import React from "react"
import colors from "../designSystem/colors";

const OverviewTitle: React.FC = (props:{children:any[]})  => {
    return (
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          css={{
            color: colors.darkShade,
            textDecoration: `none`,
            fontSize: '42pt',
            fontFamily: 'Manjari',
          }}
        >
          {props.children}
        </Link>
      </h1>
    )
}

const Header = (props:{siteTitle:string}) => (
  <header
    css={{
      marginBottom: `8px`,
      lineHeight: '80px',
      background: colors.brandColor,
    }}
  >
    <div
      css={{
        maxWidth: 1200,
        margin: `0 auto`,
        padding: '8px',
      }}

    >
      <OverviewTitle>{props.siteTitle}</OverviewTitle>
    </div>

    <div
      css={{
        marginTop: 8,
        border: `1px solid ${colors.lightAccent}`,
        height: '4px',
        background: colors.lightAccent,
        pageBreakAfter: 'avoid',
      }}/>
  </header>
)

export default Header
