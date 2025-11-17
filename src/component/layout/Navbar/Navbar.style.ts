import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const NavbarStyle: SerializedStyles = css`
  height: ${theme.headerHeight};
  background-color: ${theme.colors.primaryForeground};
  border-bottom: 1px solid ${theme.colors.border};
`
