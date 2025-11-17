import { css, type SerializedStyles } from '@emotion/react'

import { block, mediaQuery, spaceYStyle, theme } from '@/styles'

export const shortUrlCardContainer: SerializedStyles = css`
  display: grid;
  gap: ${theme.spacing.md};
  ${mediaQuery.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const shortUrlContainer: SerializedStyles = css`
  ${block}
  ${spaceYStyle}
  ${mediaQuery.desktop} {
    width: 45%;
  }
`
export const shortUrlCardStyle: SerializedStyles = css``

export const cardContentStyle: SerializedStyles = css`
  display: flex;
  gap: ${theme.spacing.sm};
`
export const textCardContent: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.mutedForeground};
`
