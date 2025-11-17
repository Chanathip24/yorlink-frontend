import { PageSection } from '@/component/layout'
import { description, highlightPrimaryGradient } from '@/styles'

import { HomeStyle } from './Home.style'

const HomePage = () => {
  return (
    <PageSection extraStyles={HomeStyle}>
      <h1>
        Shorten URLs in <span css={highlightPrimaryGradient}>Seconds</span>
      </h1>
      <p css={description}>Create short, memorable links with custom aliases, QR codes, and analytics tracking</p>
    </PageSection>
  )
}

export default HomePage
