import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const labelStyle: SerializedStyles = css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  line-height: 1;
  user-select: none;
  font-size: ${theme.typography.fontSize.sm};

  &:has(input:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  [data-disabled='true'] & {
    pointer-events: none;
    opacity: 0.5;
  }
`
