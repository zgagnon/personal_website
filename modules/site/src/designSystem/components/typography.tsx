import React                     from 'react'
import { getGridArea, GridArea } from './layout'
import colors                    from "../colors"

export const Em: React.FC = ({ children }) => {
  return (
    <span
      css={{}}
    >
      {children}
    </span>
  )
}

enum FontSize {
  Page    = 48,
  Section = 32,
  Callout = 24,
}

export const PageTitle: React.FC<GridArea> = ({ children, gridArea }) => {
  return (
    <h1
      css={{
        textAlign:      'left',
        height:         FontSize.Page,
        lineHeight:     `${FontSize.Page}px`,
        fontFamily:     'Manjari',
        fontSize:       `${FontSize.Page}px`,
        width:          150,
        '@media print': { visibility: 'hidden' },
        gridArea:       getGridArea(gridArea)
      }}
    >{children}</h1>
  )
}

export const Section: React.FC<GridArea> = ({ gridArea, children }) => {
  return (
    <h2
      css={{
        textAlign:         'left',
        lineHeight:        '48px',
        fontFamily:        'Manjari',
        marginTop:         8,
        marginBottom:      8,
        borderBottomWidth: 2,
        borderBottomColor: colors.darkAccent,
        fontSize:          FontSize.Section,
        width:             150,
        // gridArea:       getGridArea(gridArea)
      }}
    >
      {children}
    </h2>
  )
}

export const Paragraph: React.FC = ({ children }) => {
  return (
    <p
      css={{
        marginBottom: 8,
      }}
    >
      {children}
    </p>
  )
}

export const Subsection: React.FC<{ title: string }> = ({ children, title, className }) => {
  return (
    <div
      className={className}
    >
      <h2
        css={{
          textAlign:  'left',
          height:     FontSize.Callout,
          lineHeight: `${FontSize.Callout}px`,
          fontFamily: 'Manjari',
          fontSize:   `${FontSize.Callout}px`,
        }}
      >{title}</h2>
      {children}
    </div>
  )
}

export const Point: React.FC<{ title: string }> = ({ children, title, className }) => {
  return (
    <div
      className={className}
    >
      <h3
        css={{
          fontWeight: "bold",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  )
}