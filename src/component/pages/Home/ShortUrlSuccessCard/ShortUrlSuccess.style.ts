import { css, type SerializedStyles } from '@emotion/react'

import { block, flexColumn, gapSm, mediaQuery, spaceYStyle, theme } from '@/styles'

export const shortUrlSuccessCardStyle: SerializedStyles = css`
  ${block}
  background: ${theme.colors.primaryLight}10;
  border: 1px solid ${theme.colors.primaryLight};
  ${spaceYStyle}
  &:hover {
    background: ${theme.colors.primaryLight}20;
    border: 1px solid ${theme.colors.primaryLight};
  }
  ${mediaQuery.desktop} {
    width: 45%;
  }
`

export const buttonContainerStyle: SerializedStyles = css`
  ${flexColumn}
  ${gapSm}
  ${mediaQuery.desktop} {
    display: flex;
    flex-direction: row;
  }
`
