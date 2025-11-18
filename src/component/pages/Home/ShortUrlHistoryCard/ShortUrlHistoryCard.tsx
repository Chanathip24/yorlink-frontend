import { useAtomValue } from 'jotai/react'
import { FileWarningIcon } from 'lucide-react'

import { urlHistoryAtom, type UrlHistoryState } from '@/atoms'
import { Card, CardContent } from '@/component/common'
import { description, iconSizeStyle } from '@/styles'
import type { IShortUrlResponse } from '@/type'

import { cardContainerWrapper, shortUrlCardContainer, shortUrlContainer } from './ShortUrl.style'
import ShortUrlCard from './ShortUrlCard'

const ShortUrlHistoryCard = () => {
  // use url history from atom
  const urlHistory: UrlHistoryState = useAtomValue(urlHistoryAtom)
  return (
    <div css={shortUrlContainer}>
      {/* header */}
      <div>
        <h3>Your link history</h3>
        <p css={description}>Track your link history and manage your links</p>
      </div>
      {urlHistory.urlHistory && Array.isArray(urlHistory.urlHistory) && urlHistory.urlHistory.length > 0 ? (
        <div css={shortUrlCardContainer}>
          {urlHistory.urlHistory.map((url: IShortUrlResponse) => (
            <ShortUrlCard key={url.id} url={url} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent css={cardContainerWrapper}>
            <FileWarningIcon css={iconSizeStyle} />
            <h3>No links yet!</h3>
            <p css={description}>Your shortened URLs will show up here once you've created one.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ShortUrlHistoryCard
