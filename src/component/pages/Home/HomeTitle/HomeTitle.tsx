import { description, highlightPrimaryGradient } from '@/styles'

import { homeTitleStyle } from './Home.style'

const HomeTitle = () => {
  return (
    <div css={homeTitleStyle}>
      <h1>
        Shorten URLs in <span css={highlightPrimaryGradient}>Seconds</span>
      </h1>
      <p css={description}>Create short, memorable links with custom aliases, QR codes, and analytics tracking</p>
    </div>
  )
}

export default HomeTitle
