import { css, type SerializedStyles } from '@emotion/react'

import { theme } from './theme'

export const spaceYStyle: SerializedStyles = css`
  & > :not(:last-child) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(${theme.spacing.md} * var(--tw-space-y-reverse)));
    margin-block-end: calc(calc(${theme.spacing.md} * calc(1 - var(--tw-space-y-reverse))));
  }
`

export const spaceYLgStyle: SerializedStyles = css`
  & > :not(:last-child) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(${theme.spacing.lg} * var(--tw-space-y-reverse)));
    margin-block-end: calc(calc(${theme.spacing.lg} * calc(1 - var(--tw-space-y-reverse))));
  }
`

export const spaceYXlStyle: SerializedStyles = css`
  & > :not(:last-child) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(${theme.spacing.xl} * var(--tw-space-y-reverse)));
    margin-block-end: calc(calc(${theme.spacing.xl} * calc(1 - var(--tw-space-y-reverse))));
  }
`
