import { css, type Keyframes, keyframes, type SerializedStyles } from '@emotion/react'

import { spaceYStyle, theme } from '@/styles'

export const iconPrimaryXlStyle: SerializedStyles = css`
  width: 48px;
  height: 48px;
  color: white;
  stroke-width: 2;
`
export const containerStyle: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const fadeIn: Keyframes = keyframes`
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `

export const cardStyle: SerializedStyles = css`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 4rem 3rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.6s ease-out;
`

export const pulse: Keyframes = keyframes`
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    `

export const iconContainerStyle: SerializedStyles = css`
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.shadows.md};
  animation: ${pulse} 2s ease-in-out infinite;
`

export const headingStyle: SerializedStyles = css`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
  line-height: 1.2;
`

export const descriptionStyle: SerializedStyles = css`
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0 0 2rem 0;
  line-height: 1.6;
`

export const infoBoxStyle: SerializedStyles = css`
  background: linear-gradient(135deg, #ede9fe 0%, #f3e8ff 100%);
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
`

export const infoLabelStyle: SerializedStyles = css`
  font-size: 0.875rem;
  font-weight: 600;
  color: #7c3aed;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem 0;
`

export const infoValueStyle: SerializedStyles = css`
  font-size: 1.125rem;
  font-weight: 600;
  color: #5b21b6;
  margin: 0;
`

export const hintBoxStyle: SerializedStyles = css`
  background: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  text-align: left;
`

export const hintTextStyle: SerializedStyles = css`
  flex: 1;
  margin: 0;
  color: #92400e;
  font-size: 0.875rem;
  line-height: 1.5;
`

export const hintLabelStyle: SerializedStyles = css`
  font-weight: 600;
  margin-bottom: 0.25rem;
`

export const formContainerStyle: SerializedStyles = css`
  margin-top: 2rem;
  width: 100%;
  ${spaceYStyle}
`

export const inputContainerStyle: SerializedStyles = css`
  position: relative;
  margin-bottom: 1rem;
`
