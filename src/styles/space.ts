import { css } from '@emotion/react'

import { theme } from './theme'

export const spaceYStyle = css`
  & > :not(:last-child) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(${theme.spacing.md} * var(--tw-space-y-reverse)));
    margin-block-end: calc(calc(${theme.spacing.md} * calc(1 - var(--tw-space-y-reverse))));
  }
`
