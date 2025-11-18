import { css, type SerializedStyles } from '@emotion/react'

import { theme, transitionBaseStyle } from '@/styles'

export const cardBaseStyle: SerializedStyles = css`
  padding: ${theme.spacing.lg};
`

export const cardStyle: SerializedStyles = css`
  background: ${theme.colors.cardBackground};
  color: ${theme.colors.cardForeground};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};

  &:hover {
    box-shadow: ${theme.shadows.sm};
  }
  ${transitionBaseStyle}
  ${cardBaseStyle}
`

export const cardHeaderStyle: SerializedStyles = css`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: auto auto;
  align-items: start;
  gap: ${theme.spacing.sm};
`
export const cardTitleStyle: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const cardDescriptionStyle: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.mutedForeground};
`
