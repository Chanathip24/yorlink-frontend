import { CopyIcon, QrCode, Trash } from 'lucide-react'
import { type Dispatch, type SetStateAction, useCallback, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

import { Button, Card, CardContent, CardHeader, CardTitle } from '@/component/common'
import { QrcodeSection } from '@/component/pages/Home/ShortUrlSuccessCard'
import { capitalize, highlightPrimary, iconSizeStyle } from '@/styles'
import type { IShortUrlResponse } from '@/type'
import { copyTextToClipboard, formatDate, getFullShortenUrl, getShortenSuffixUrl } from '@/utilities'

import { cardContentStyle, shortUrlCardStyle, textCardContent } from './ShortUrl.style'

type IShortUrlCardProps = {
  url: IShortUrlResponse
}
const ShortUrlCard = ({ url }: IShortUrlCardProps) => {
  const [isQrcodeOpen, setIsQrcodeOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)

  const shortenUrl: string = useMemo(() => {
    return getFullShortenUrl(url.alias)
  }, [url.alias])

  const shortenSuffixUrl: string = useMemo(() => {
    return getShortenSuffixUrl(url.alias)
  }, [url.alias])

  const handleToggleQrcode = useCallback(() => {
    setIsQrcodeOpen((prev) => !prev)
  }, [])

  /**
   * Handles copying the shortened URL to the clipboard.
   * Triggers a success toast notification upon successful copy.
   *
   * @function handleCopyShortUrl
   * @returns {void}
   */
  const handleCopyShortUrl = useCallback(() => {
    copyTextToClipboard(shortenUrl)
    toast.success('Short URL copied to clipboard')
  }, [shortenUrl])

  return (
    <Card css={shortUrlCardStyle}>
      <CardHeader>
        <Link to={shortenSuffixUrl}>
          <CardTitle css={highlightPrimary}>{shortenUrl}</CardTitle>
        </Link>
        <Button css={capitalize}>{url.shortUrlType}</Button>
        <div>
          <Button onClick={handleCopyShortUrl} size="icon" variant="ghost">
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
        <p css={textCardContent}>Created at {formatDate(new Date(url.createdAt), 'DD/MM/YYYY')}</p>
      </CardContent>
      <QrcodeSection isOpen={isQrcodeOpen} value={shortenUrl} />
    </Card>
  )
}

export default ShortUrlCard
