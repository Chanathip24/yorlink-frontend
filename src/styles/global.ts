import { css, type SerializedStyles } from '@emotion/react'

import { theme } from './theme'

export const globalStyles: SerializedStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+Thai:wght@100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: ${theme.typography.fontFamily.body};
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.primaryForeground};
    background-color: ${theme.colors.background};
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: 1.2;
  }

  h1 {
    font-size: ${theme.typography.fontSize['4xl']};
  }
  h2 {
    font-size: ${theme.typography.fontSize['3xl']};
  }
  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
  }
  h4 {
    font-size: ${theme.typography.fontSize.xl};
  }
  p {
    font-size: ${theme.typography.fontSize.base};
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.secondaryForeground};
    }
  }

  button {
    font-family: ${theme.typography.fontFamily.body};
  }
`
