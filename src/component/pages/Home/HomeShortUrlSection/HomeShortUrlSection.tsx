import { useAtomValue, useSetAtom } from 'jotai/react'
import { Unlink2 } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { urlHistoryAtom, type UrlHistoryState } from '@/atoms'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/component/common'
import { ShortUrlHistoryCard, ShortUrlSuccessCard } from '@/component/pages/Home'
import { useYorLinkApiShortenUrl } from '@/hook'
import { spaceYStyle } from '@/styles'
import type { IShortUrlRequest, IYorLinkApiClientShortUrlResponse, Maybe, urlShortSchemaType } from '@/type'
import { formatDate } from '@/utilities'

import {
  homeShortUrlSectionContainerStyle,
  homeShortUrlSectionContentStyle,
  shortUrlCardHeaderStyle,
  urlIconStyle,
} from './HomeShortUrl.style'
import ShortUrlForm from './ShortUrlForm'

const HomeShortUrlSection = () => {
  const { mutateAsync: shortenUrl, isPending: isShorteningUrl } = useYorLinkApiShortenUrl()
  const [payload, setPayload] = useState<Maybe<IYorLinkApiClientShortUrlResponse['data']>>(null)

  const setUrlHistory = useSetAtom(urlHistoryAtom)
  const urlHistory: UrlHistoryState = useAtomValue(urlHistoryAtom)

  const handleShortenUrl = async (request: urlShortSchemaType) => {
    const payload: IShortUrlRequest = {
      url: request.url,
      type: request.type,
      activationDate: request.activationDate ? formatDate(request.activationDate) : '',
      expirationDate: request.expirationDate ? formatDate(request.expirationDate) : '',
      maximumClick: Number(request.maximumClicks),
      password: request.password ?? '',
      passwordHint: request.passwordHint ?? '',
      isCustomAlias: request.isCustomAlias ?? false,
      alias: request.alias ?? '',
    }
    try {
      const result: IYorLinkApiClientShortUrlResponse['data'] = await shortenUrl(payload)
      setPayload(result)
      //check id exist in url history
      const isExist: boolean = urlHistory.urlHistory?.some((item) => item.id === result.id) ?? false
      if (isExist) {
        toast.error('URL already exists')
        return
      }
      setUrlHistory((prev) => ({
        ...prev,
        urlHistory: Array.isArray(prev.urlHistory) ? [...prev.urlHistory, result] : [result],
      }))

      toast.success('URL shortened successfully')
      //eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to shorten URL')
    }
  }
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
        <CardContent css={spaceYStyle}>
          <ShortUrlForm isShorteningUrl={isShorteningUrl} handleShortenUrl={handleShortenUrl} />
        </CardContent>
      </Card>
      <ShortUrlSuccessCard payload={payload} />
      <ShortUrlHistoryCard />
    </div>
  )
}

export default HomeShortUrlSection
