import { PageSection } from '@/component/layout'
import { HomeShortUrlSection, HomeTitle } from '@/component/pages/Home'
import { spaceYXlStyle } from '@/styles'

const HomePage = () => {
  return (
    <PageSection extraStyles={spaceYXlStyle}>
      <HomeTitle />
      <HomeShortUrlSection />
    </PageSection>
  )
}

export default HomePage
