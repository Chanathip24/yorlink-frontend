import { css, type SerializedStyles } from '@emotion/react'

import { mediaQuery, spaceYStyle, theme } from '@/styles'

export const shortUrlCardHeaderStyle: SerializedStyles = css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`

export const urlIconStyle: SerializedStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm};
  color: ${theme.colors.primaryForeground};
  background-color: ${theme.colors.primary};
`

export const urlTypeOptionsContainerStyle: SerializedStyles = css`
  display: grid;
  ${mediaQuery.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md};
  }
`

export const formContainerStyle: SerializedStyles = css`
  ${spaceYStyle}
`
