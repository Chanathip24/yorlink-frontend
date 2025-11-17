import { css, type SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { theme, transitionBaseStyle } from '@/styles'
import type { ButtonProps, ButtonSize, ButtonVariant } from '@/type'

const buttonBaseStyle: SerializedStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  ${transitionBaseStyle}
  outline: none;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  &:focus-visible {
    border-color: ${theme.colors.ring};
    box-shadow: 0 0 0 3px ${theme.colors.ring};
  }

  &[aria-invalid='true'] {
    border-color: ${theme.colors.destructive};
    box-shadow: 0 0 0 3px ${theme.colors.destructive};
  }
`

// Variant styles
const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.primaryForeground};
    &:hover {
      background: ${theme.colors.primary} / 90%;
    }
  `,
  destructive: css`
    background: ${theme.colors.destructive};
    color: white;
    &:hover {
      background: ${theme.colors.destructive} / 90%;
    }
    &:focus-visible {
      box-shadow: ${theme.shadows.sm};
    }
  `,
  outline: css`
    border: 0.5px solid ${theme.colors.input};
    background: ${theme.colors.background};
    box-shadow: 0 0 0 0.5px ${theme.colors.border};
    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.accentForeground};
    }
  `,
  secondary: css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.secondaryForeground};
    &:hover {
      background: ${theme.colors.secondary} / 80%;
    }
  `,
  ghost: css`
    background: transparent;
    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.accentForeground};
    }
  `,
  link: css`
    background: transparent;
    text-decoration: underline;
    &:hover {
      text-decoration: underline;
    }
  `,
}

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  default: css`
    height: 2.25rem;
    padding: 0 1rem;
  `,
  sm: css`
    height: 2rem;
    gap: 0.375rem;
    padding: 0 0.75rem;
  `,
  lg: css`
    height: 2.5rem;
    padding: 0 1.5rem;
  `,
  icon: css`
    width: 2.25rem;
    height: 2.25rem;
  `,
  'icon-sm': css`
    width: 2rem;
    height: 2rem;
  `,
  'icon-lg': css`
    width: 2.5rem;
    height: 2.5rem;
  `,
}

// Styled button with variants
export const StyledButton = styled.button<ButtonProps>`
  ${buttonBaseStyle}
  ${({ variant }) => variantStyles[variant || 'default']}
  ${({ size }) => sizeStyles[size || 'default']}
`
