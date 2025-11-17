import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '../theme'

export const description: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.mutedForeground};
`

export const highlightPrimary: SerializedStyles = css`
  color: ${theme.colors.primary};
`

export const highlightPrimaryGradient: SerializedStyles = css`
  background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
