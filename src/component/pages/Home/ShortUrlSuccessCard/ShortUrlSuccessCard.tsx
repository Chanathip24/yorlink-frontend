import { CopyIcon, QrCode, SquareArrowOutUpRight } from 'lucide-react'
import { type Dispatch, type SetStateAction, useCallback, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

import { Button, Card, CardContent, CardDescription, CardHeader } from '@/component/common'
import { flexBetween, highlightPrimary, iconSizeForegroundStyle, iconSizeStyle } from '@/styles'
import { copyTextToClipboard } from '@/utilities'

import { QrcodeSection } from './QrcodeSection'
import { buttonContainerStyle, shortUrlSuccessCardStyle } from './ShortUrlSuccess.style'

const ShortUrlSuccessCard = () => {
  const [isQrcodeOpen, setIsQrcodeOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
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

  const handleToggleQrcode = useCallback(() => {
    setIsQrcodeOpen((prev) => !prev)
  }, [])

  const showQrcode: string = useMemo(() => {
    return isQrcodeOpen ? 'Hide QR Code' : 'Show QR Code'
  }, [isQrcodeOpen])

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
          <Button variant="outline" onClick={handleToggleQrcode}>
            <QrCode css={iconSizeForegroundStyle} />
            {showQrcode}
          </Button>
          <Button variant="outline" onClick={handleOpenLink}>
            <SquareArrowOutUpRight css={iconSizeForegroundStyle} />
            Open Link
          </Button>
        </div>
      </CardContent>
      <QrcodeSection isOpen={isQrcodeOpen} value={mockValue} />
    </Card>
  )
}

export default ShortUrlSuccessCard
