import { PageSection } from '@/component/layout'
import { HomeShortUrlSection, HomeTitle } from '@/component/pages/Home'

const HomePage = () => {
  return (
    <PageSection>
      <HomeTitle />
      <HomeShortUrlSection />
    </PageSection>
  )
}

export default HomePage
