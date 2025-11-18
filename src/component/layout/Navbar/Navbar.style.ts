import { css, type SerializedStyles } from '@emotion/react'

import { flexCenter, theme } from '@/styles'

export const NavbarStyle: SerializedStyles = css`
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
  padding-top: ${theme.spacing.sm};
  padding-bottom: ${theme.spacing.sm};
  background-color: ${theme.colors.primaryForeground};
  border-bottom: 1px solid ${theme.colors.border};
`

export const navbarWrapperStyle: SerializedStyles = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`
export const iconWrapperStyle: SerializedStyles = css`
  ${flexCenter}
  background-color: ${theme.colors.primary};
  width: 40px;
  height: 40px;
  color: ${theme.colors.primaryForeground};
  border-radius: ${theme.borderRadius.sm};
`

export const descriptionSizeStyle: SerializedStyles = css`
  font-size: ${theme.typography.fontSize.sm};
`

export const iconSizeStyle: SerializedStyles = css`
  width: 24px;
  height: 24px;
`
