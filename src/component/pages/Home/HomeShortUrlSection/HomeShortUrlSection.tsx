import { Unlink2 } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/component/common'

import {
  homeShortUrlSectionContainerStyle,
  homeShortUrlSectionContentStyle,
  shortUrlCardHeaderStyle,
  urlIconStyle,
} from './HomeShortUrl.style'
import ShortUrlForm from './ShortUrlForm'

const HomeShortUrlSection = () => {
  return (
    <div css={homeShortUrlSectionContainerStyle}>
      <Card css={homeShortUrlSectionContentStyle}>
        <CardHeader extraStyles={shortUrlCardHeaderStyle}>
          <div css={urlIconStyle}>
            <Unlink2 />
          </div>
          <div>
            <CardTitle>Shorten Your URL</CardTitle>
            <CardDescription>Enter your long URL to get a short, memorable link</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ShortUrlForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default HomeShortUrlSection
