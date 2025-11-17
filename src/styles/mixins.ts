import { css, type SerializedStyles } from '@emotion/react'

import { theme } from './theme'

export const transitionBaseStyle: SerializedStyles = css`
  transition: all 0.2s ease-in-out;
`
export const flexCenter: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const flexColumn: SerializedStyles = css`
  display: flex;
  flex-direction: column;
`
export const flexBetween: SerializedStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const iconSizeStyle: SerializedStyles = css`
  width: 16px;
  height: 16px;
  color: ${theme.colors.primary};
`

export const iconSizeForegroundStyle: SerializedStyles = css`
  width: 16px;
  height: 16px;
`

export const gapMd: SerializedStyles = css`
  gap: ${theme.spacing.md};
`

export const gapSm: SerializedStyles = css`
  gap: ${theme.spacing.sm};
`

export const block: SerializedStyles = css`
  width: 100%;
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

// Media query helpers
export const mediaQuery = {
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
}
