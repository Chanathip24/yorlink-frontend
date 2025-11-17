import { css, type SerializedStyles } from '@emotion/react'

import { flexCenter, theme, transitionBaseStyle } from '@/styles'

export const cardStyle: SerializedStyles = css`
  padding: 1.25rem;
  border-radius: 1rem;
  border-width: 2px;
  text-align: left;
  transition: all 0.1s;
  display: group;
  border: 2px solid ${theme.colors.border};
  background: ${theme.colors.cardBackground};
  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.accent};
    transform: scale(1.01);
  }
`

export const selectedCardStyle: SerializedStyles = css`
  border: 2px solid ${theme.colors.primary};
  background: ${theme.colors.accent};
  box-shadow: ${theme.shadows.lg};
  transform: scale(1.02);
`
export const cardWrapper: SerializedStyles = css`
  ${flexCenter}
  gap: 1rem;
`

export const cardIcon: SerializedStyles = css`
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.md};
  ${transitionBaseStyle}
  background: ${theme.colors.muted};
  color: ${theme.colors.mutedForeground};
  .group:hover & {
    color: ${theme.colors.accent};
  }
`
export const cardLabel: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.cardForeground};
  transition: color 0.1s ease-in-out;
`

export const cardDescription: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.mutedForeground};
  transition: color 0.1s ease-in-out;
`
export const cardLabelSelected: SerializedStyles = css`
  color: ${theme.colors.primary};
`
export const cardIconSelected: SerializedStyles = css`
  background: ${theme.colors.primary};
  color: ${theme.colors.primaryForeground};
  ${theme.shadows.lg}
`
