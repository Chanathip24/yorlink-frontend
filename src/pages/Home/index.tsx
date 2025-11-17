import { PageSection } from '@/component/layout'
import { HomeShortUrlSection, HomeTitle } from '@/component/pages/Home'
import { spaceYStyle } from '@/styles'

const HomePage = () => {
  return (
    <PageSection extraStyles={spaceYStyle}>
      <HomeTitle />
      <HomeShortUrlSection />
    </PageSection>
  )
}

export default HomePage
