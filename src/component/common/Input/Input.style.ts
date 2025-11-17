import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const inputContainerStyle = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  border-radius: 0.375rem;
  transition: all 75ms ease-in-out;
  border: none;

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.primary};
  }
`

export const inputErrorStyle: SerializedStyles = css`
  color: ${theme.colors.destructive};
  font-size: ${theme.typography.fontSize.sm};
  margin-top: -${theme.spacing.sm};
`
export const inputWrapperStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;

  border-width: 1px;
  border-style: solid;
  border-color: ${theme.colors.border};
  border-radius: 0.375rem;

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.primary};
  }
`

export const inputStyle: SerializedStyles = css`
  border: none;
  &::placeholder {
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.medium};
  }
  &:file {
    font-size: ${theme.typography.fontSize.sm};
    border: none;
    background: transparent;
    font-weight: ${theme.typography.fontWeight.medium};
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &::selection {
    color: ${theme.colors.primaryForeground};
  }

  font-size: ${theme.typography.fontSize.base};

  display: flex;
  width: 100%;
  border-radius: ${theme.borderRadius.md};
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
  padding-top: 12px;
  padding-bottom: 12px;
  outline: none;
`
