import { CopyIcon, QrCode, Trash } from 'lucide-react'
import { type Dispatch, type SetStateAction, useCallback, useMemo, useState } from 'react'

import { Button, Card, CardContent, CardHeader, CardTitle } from '@/component/common'
import { QrcodeSection } from '@/component/pages/Home/ShortUrlSuccessCard'
import { highlightPrimary, iconSizeStyle } from '@/styles'

import { cardContentStyle, shortUrlCardStyle, textCardContent } from './ShortUrl.style'

const ShortUrlCard = () => {
  const [isQrcodeOpen, setIsQrcodeOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
  const mockValue: string = useMemo(() => {
    return 'https://google.com'
  }, [])

  const handleToggleQrcode = useCallback(() => {
    setIsQrcodeOpen((prev) => !prev)
  }, [])
  return (
    <Card css={shortUrlCardStyle}>
      <CardHeader>
        <CardTitle css={highlightPrimary}>https://www.google.com</CardTitle>
        <div>
          <Button size="icon" variant="ghost">
            <CopyIcon css={iconSizeStyle} />
          </Button>
          <Button size="icon" variant="ghost" onClick={handleToggleQrcode}>
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
      <QrcodeSection isOpen={isQrcodeOpen} value={mockValue} />
    </Card>
  )
}

export default ShortUrlCard
