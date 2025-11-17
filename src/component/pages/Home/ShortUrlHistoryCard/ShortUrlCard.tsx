import { CopyIcon, QrCode, Trash } from 'lucide-react'

import { Button, Card, CardContent, CardHeader, CardTitle } from '@/component/common'
import { highlightPrimary, iconSizeStyle } from '@/styles'

import { cardContentStyle, shortUrlCardStyle, textCardContent } from './ShortUrl.style'

const ShortUrlCard = () => {
  return (
    <Card css={shortUrlCardStyle}>
      <CardHeader>
        <CardTitle css={highlightPrimary}>https://www.google.com</CardTitle>
        <div>
          <Button size="icon" variant="ghost">
            <CopyIcon css={iconSizeStyle} />
          </Button>
          <Button size="icon" variant="ghost">
            <QrCode css={iconSizeStyle} />
          </Button>
          <Button size="icon" variant="ghost">
            <Trash css={iconSizeStyle} />
          </Button>
        </div>
      </CardHeader>
      <CardContent css={cardContentStyle}>
        <p css={textCardContent}>Created at 10/10/2025</p>
        <p css={textCardContent}>0 Clicks</p>
      </CardContent>
    </Card>
  )
}

export default ShortUrlCard
