import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const formItemStyle: SerializedStyles = css`
  display: grid;
  gap: ${theme.spacing.sm};
`

export const formLabelStyle: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};

  &[data-error='true'] {
    color: ${theme.colors.destructive};
  }
`

export const formDescriptionStyle: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.mutedForeground};
`

export const formMessageStyle: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.destructive};
`
