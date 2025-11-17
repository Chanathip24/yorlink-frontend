import { CopyIcon, QrCode, SquareArrowOutUpRight } from 'lucide-react'
import { type Dispatch, type SetStateAction, useCallback, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, type NavigateFunction, useNavigate } from 'react-router-dom'

import { Button, Card, CardContent, CardDescription, CardHeader } from '@/component/common'
import { YORLINK_API_SHORTEN_URL } from '@/config'
import { flexBetween, highlightPrimary, iconSizeForegroundStyle, iconSizeStyle } from '@/styles'
import type { IYorLinkApiClientShortUrlResponse, Maybe } from '@/type'
import { copyTextToClipboard } from '@/utilities'

import { QrcodeSection } from './QrcodeSection'
import { buttonContainerStyle, shortUrlSuccessCardStyle } from './ShortUrlSuccess.style'

type IShortUrlSuccessCardProps = {
  payload: Maybe<IYorLinkApiClientShortUrlResponse['data']>
}
const ShortUrlSuccessCard = ({ payload }: IShortUrlSuccessCardProps) => {
  const [isQrcodeOpen, setIsQrcodeOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
  const navigate: NavigateFunction = useNavigate()
  const shortUrl: string = useMemo(() => {
    return `${YORLINK_API_SHORTEN_URL}/${payload?.alias}`
  }, [payload?.alias])

  const handleCopy = useCallback(() => {
    const isCopied: boolean = copyTextToClipboard(shortUrl)
    if (isCopied) {
      toast.success('Copied to clipboard')
    } else {
      toast.error('Failed to copy to clipboard')
    }
  }, [shortUrl])

  const handleOpenLink = useCallback(() => {
    if (!payload) {
      return
    }
    navigate(payload.alias)
  }, [navigate, payload])

  const handleToggleQrcode = useCallback(() => {
    setIsQrcodeOpen((prev) => !prev)
  }, [])

  const showQrcode: string = useMemo(() => {
    return isQrcodeOpen ? 'Hide QR Code' : 'Show QR Code'
  }, [isQrcodeOpen])

  if (!payload) {
    return null
  }

  return (
    <Card css={shortUrlSuccessCardStyle}>
      <CardHeader>
        <div>
          <CardDescription>Your short URL is ready!</CardDescription>
          <div css={flexBetween}>
            <Link to={payload.alias} css={highlightPrimary}>
              <h3>{shortUrl}</h3>
            </Link>
            <Button size="icon" variant="outline" onClick={handleCopy}>
              <CopyIcon css={iconSizeStyle} />
            </Button>
          </div>
          <CardDescription>Original : {payload.originalUrl}</CardDescription>
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
      <QrcodeSection isOpen={isQrcodeOpen} value={shortUrl} />
    </Card>
  )
}

export default ShortUrlSuccessCard
