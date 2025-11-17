import { CopyIcon, QrCode, SquareArrowOutUpRight } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

import { Button, Card, CardContent, CardDescription, CardHeader } from '@/component/common'
import { flexBetween, highlightPrimary, iconSizeForegroundStyle, iconSizeStyle } from '@/styles'
import { copyTextToClipboard } from '@/utilities'

import { buttonContainerStyle, shortUrlSuccessCardStyle } from './ShortUrlSuccess.style'

const ShortUrlSuccessCard = () => {
  const mockValue = useMemo(() => {
    return 'https://google.com'
  }, [])

  const handleCopy = useCallback(() => {
    const isCopied: boolean = copyTextToClipboard(mockValue)
    if (isCopied) {
      toast.success('Copied to clipboard')
    } else {
      toast.error('Failed to copy to clipboard')
    }
  }, [mockValue])

  const handleOpenLink = useCallback(() => {
    window.open(mockValue, '_blank')
  }, [mockValue])

  return (
    <Card css={shortUrlSuccessCardStyle}>
      <CardHeader>
        <div>
          <CardDescription>Your short URL is ready!</CardDescription>
          <div css={flexBetween}>
            <Link to={mockValue} css={highlightPrimary}>
              <h3>{mockValue}</h3>
            </Link>
            <Button size="icon" variant="outline" onClick={handleCopy}>
              <CopyIcon css={iconSizeStyle} />
            </Button>
          </div>
          <CardDescription>Original : https://www.google.com</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div css={buttonContainerStyle}>
          <Button onClick={handleCopy}>
            <CopyIcon css={iconSizeForegroundStyle} />
            Copy
          </Button>
          <Button variant="outline" onClick={handleCopy}>
            <QrCode css={iconSizeForegroundStyle} />
            Show QR Code
          </Button>
          <Button variant="outline" onClick={handleOpenLink}>
            <SquareArrowOutUpRight css={iconSizeForegroundStyle} />
            Open Link
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ShortUrlSuccessCard
