import { css, type Keyframes, keyframes, type SerializedStyles } from '@emotion/react'

const spin: Keyframes = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const spinnerStyle: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  & svg {
    animation: ${spin} 1s linear infinite;
  }
`
