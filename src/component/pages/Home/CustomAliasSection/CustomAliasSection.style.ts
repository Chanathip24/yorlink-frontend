import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const customAliasSectionContainerStyle: SerializedStyles = css`
  background-color: ${theme.colors.primary}10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const customAliasHeaderStyle: SerializedStyles = css`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
`

export const customAliasHeaderIconStyle: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.accent};
  padding: ${theme.spacing.sm};
`
