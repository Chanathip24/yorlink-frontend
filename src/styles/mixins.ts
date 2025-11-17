import { css, type SerializedStyles } from '@emotion/react'

import { theme } from './theme'

export const flexCenter: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexBetween: SerializedStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const container: SerializedStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`

export const buttonReset: SerializedStyles = css`
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
  padding: 0;
`

export const truncateText: SerializedStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const card: SerializedStyles = css`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
`

// Media query helpers
export const mediaQuery = {
  mobile: `@media (min-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  wide: `@media (min-width: ${theme.breakpoints.wide})`,
}
