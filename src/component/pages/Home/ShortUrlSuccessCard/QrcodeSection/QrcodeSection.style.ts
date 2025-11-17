import { css, type SerializedStyles } from '@emotion/react'

import { flexCenter, theme } from '@/styles'

export const qrcodeSectionStyle: SerializedStyles = css`
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  ${flexCenter}
`
