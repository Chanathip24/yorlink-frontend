import { css, type SerializedStyles } from '@emotion/react'

import { flexCenter, mediaQuery, spaceYLgStyle, theme } from '@/styles'

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
  gap: ${theme.spacing.md};
  ${mediaQuery.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`

export const formContainerStyle: SerializedStyles = css`
  ${spaceYLgStyle}
`

export const homeShortUrlSectionContainerStyle: SerializedStyles = css`
  ${flexCenter}
`

export const homeShortUrlSectionContentStyle: SerializedStyles = css`
  ${spaceYLgStyle}
  ${mediaQuery.desktop} {
    width: 45%;
  }
`
