import { css, type SerializedStyles } from '@emotion/react'

import { mediaQuery, theme } from '@/styles'

export const PageSectionStyle: SerializedStyles = css`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
  padding-top: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.lg};

  ${mediaQuery.desktop} {
    padding-left: ${theme.spacing.xl};
    padding-right: ${theme.spacing.xl};
  }
`
