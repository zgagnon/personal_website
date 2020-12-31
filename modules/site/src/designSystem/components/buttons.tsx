/** @jsx jsx */
import { css, Interpolation, jsx } from "@emotion/react"

import colors from "../colors"
import * as React from "react"
import { getGridArea, GridArea } from "./layout"

const BUTTON_HEIGHT = 32
const BUTTON_WIDTH = 120

const interactiveBaseStyle = css({
  "@media print": { visibility: "hidden" },
  display: "block",
  borderStyle: "solid",
  textAlign: "center",
  borderColor: colors.darkShade,
  background: colors.brandColor,
  color: colors.darkShade,
  borderWidth: "1px",
  borderRadius: "3px",
  height: BUTTON_HEIGHT,
  width: BUTTON_WIDTH,
  margin: "4px",
  cursor: "pointer",
})

interface ButtonProps {
  onClick: () => void
  localCss?: Interpolation
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  localCss,
}) => {
  const primaryButtonStyles = css({
    height: `${BUTTON_HEIGHT}px`,
    width: `${BUTTON_WIDTH}px`,
    lineHeight: `${BUTTON_HEIGHT}px`,
  })
  const combinedCss = css(interactiveBaseStyle, primaryButtonStyles, localCss)
  return (
    <button onClick={onClick} css={combinedCss}>
      {children}
    </button>
  )
}

interface AnchorProps {
  reverseColors?: boolean
  href: string
  localCss?: Interpolation
}

export const SecondaryLink: React.FC<AnchorProps & GridArea> = ({
  children,
  href,
  localCss,
  gridArea,
  reverseColors,
}) => {
  const secondarylinkstyles = css({
    background: reverseColors ? colors.brandColor : colors.lightShade,
    height: `${BUTTON_HEIGHT - 2}px`,
    width: `${BUTTON_WIDTH - 2}px`,
    lineHeight: `${BUTTON_HEIGHT - 2}px`,
    textAlign: "center",
    gridArea: getGridArea(gridArea),
  })
  const combinedCss = css(interactiveBaseStyle, secondarylinkstyles, localCss)
  return (
    <a href={href} css={combinedCss}>
      {children}
    </a>
  )
}
