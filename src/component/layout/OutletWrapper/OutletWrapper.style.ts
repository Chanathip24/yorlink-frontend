import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const OutletWrapperStyle: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  min-height: calc(100dvh - ${theme.headerHeight});
  overflow-y: auto;
`
