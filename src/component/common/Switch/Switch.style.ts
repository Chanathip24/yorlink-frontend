import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const switchStyle: SerializedStyles = css`
  box-shadow: ${theme.shadows.sm};
  display: inline-flex;
  height: 1.15rem;
  width: 2.2rem;
  flex-shrink: 0;
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${theme.colors.border};
  outline: none;
  transition: all 0.2s;
  &[data-state='checked'] {
    background-color: ${theme.colors.primary};
  }
  &[data-state='unchecked'] {
    background-color: ${theme.colors.secondary};
  }
  &:focus-visible {
    border-color: ${theme.colors.ring};
    box-shadow: 0 0 0 3px ${theme.colors.ring};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const switchThumbStyle: SerializedStyles = css`
  background-color: ${theme.colors.primaryLight};
  &[data-state='unchecked'] {
    background-color: ${theme.colors.secondaryForeground};
    transform: translateX(0);
  }
  width: 1.15rem;
  height: 1.15rem;
  pointer-events: none;
  size: 1rem;
  transition: transform 0.2s;
  border-radius: ${theme.borderRadius.full};
  transition: transform 0.2s;
  &[data-state='checked'] {
    transform: translateX(calc(100% - 2px));
    background-color: ${theme.colors.primaryForeground};
  }
`
