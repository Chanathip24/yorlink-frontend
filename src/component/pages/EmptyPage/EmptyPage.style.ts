import { css, type SerializedStyles } from '@emotion/react'

import { theme } from '@/styles'

export const containerStyle: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${theme.colors.background};
  padding: 2rem;
`

export const cardStyle: SerializedStyles = css`
  background: ${theme.colors.cardBackground};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: ${theme.shadows.md};
  animation: fadeIn 0.6s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const iconContainerStyle: SerializedStyles = css`
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  background: ${theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`

export const iconStyle: SerializedStyles = css`
  width: 60px;
  height: 60px;
  color: white;
`

export const headingStyle: SerializedStyles = css`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.cardForeground};
  margin: 0 0 1rem 0;
`

export const textStyle: SerializedStyles = css`
  font-size: 1.125rem;
  color: ${theme.colors.mutedForeground};
  margin: 0 0 2rem 0;
  line-height: 1.6;
`
