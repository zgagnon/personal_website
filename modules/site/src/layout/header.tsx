/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"
import colors from "../designSystem/colors"
import { SecondaryLink } from "../designSystem/components/buttons"
import { MAIN_GRID_COLUMNS } from "../designSystem/components/layout"

interface NavLinkProps {
  column: number
  width?: number
  to: string
}

const NavLink: React.FC<NavLinkProps> = ({
  column,
  width = 1,
  to,
  children,
}) => {
  return (
    <Link
      to={to}
      css={{
        textAlign: "center",
        color: colors.darkShade,
        fontSize: "18px",
        fontFamily: "Manjari",
        gridColumnStart: column,
        gridColumnEnd: column + width,
        gridRowStart: 2,
        "@media print": { visibility: "hidden" },
      }}
    >
      {children}
    </Link>
  )
}

const Header = (props: { siteTitle: string }) => (
  <header
    css={{
      background: colors.brandColor,
    }}
  >
    <div
      css={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        paddingTop: 16,
        gridTemplateColumns: MAIN_GRID_COLUMNS,
        gridTemplateRows: "54px 18px [bottom]",
        alignItems: "center",
      }}
    >
      <h1
        css={{
          gridColumnStart: 1,
          gridColumnEnd: 8,
        }}
      >
        <Link
          to="/"
          css={{
            color: colors.darkShade,
            textDecoration: `none`,
            fontSize: "54px",
            fontFamily: "Manjari",
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>
      <NavLink to="/" column={1} width={2}>
        Home
      </NavLink>
      <NavLink to="/resume" column={3} width={2}>
        Resume
      </NavLink>
      <NavLink to="/manager-readme" column={5} width={2}>
        Manager Readme
      </NavLink>
      <SecondaryLink
        href="mailto:zoe@zgagnon.com"
        gridArea={[2, 16, "bottom", "end"]}
        reverseColors
      >
        Contact Me
      </SecondaryLink>
    </div>
    <div
      css={{
        marginTop: 8,
        border: `1px solid ${colors.lightAccent}`,
        height: "4px",
        background: colors.lightAccent,
        pageBreakAfter: "avoid",
      }}
    />
  </header>
)

export default Header
