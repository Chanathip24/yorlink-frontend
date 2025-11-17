import { css, type SerializedStyles } from '@emotion/react'

import { gapMd, mediaQuery } from '@/styles'

export const previewCustomAliasSectionContainerStyle: SerializedStyles = css`
  display: grid;
  ${mediaQuery.desktop} {
    grid-template-columns: 2fr 1fr;
    ${gapMd}
  }
`
