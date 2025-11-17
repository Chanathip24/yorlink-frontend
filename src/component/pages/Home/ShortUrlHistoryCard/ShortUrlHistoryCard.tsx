import { description } from '@/styles'

import { shortUrlCardContainer, shortUrlContainer } from './ShortUrl.style'
import ShortUrlCard from './ShortUrlCard'

const ShortUrlHistoryCard = () => {
  return (
    <div css={shortUrlContainer}>
      {/* header */}
      <div>
        <h3>Your link history</h3>
        <p css={description}>Track your link history and manage your links</p>
      </div>
      <div css={shortUrlCardContainer}>
        <ShortUrlCard />
        <ShortUrlCard />
        <ShortUrlCard />
      </div>
    </div>
  )
}

export default ShortUrlHistoryCard
