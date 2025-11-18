import { AlertCircle, Link2Off } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { Spinner } from '@/component/common'
import { EmptyPage } from '@/component/pages/EmptyPage'
import {
  ExpiredExtryPoint,
  NormalEntryPoint,
  ProtectedEntryPoint,
  ScheduleEntryPoint,
} from '@/component/pages/EntryPoint'
import { SHORTURL_TYPE } from '@/enum'
import { useYorLinkApiGetUrlDetailWithAlias } from '@/hook'
import { iconPrimaryXlStyle } from '@/styles'
import type { IShortUrlDetail } from '@/type'

const EntryPoint = () => {
  const { alias } = useParams<{ alias: string }>()
  const {
    data: urlDetail,
    isLoading: isLoadingUrlDetail,
    error: errorUrlDetail,
  } = useYorLinkApiGetUrlDetailWithAlias({ alias: alias! })
  if (!alias) {
    return <div>Alias is required</div>
  }
  if (isLoadingUrlDetail) {
    return <EmptyPage title="Loading..." description="Please wait while we load the URL details." icon={<Spinner />} />
  }

  if (errorUrlDetail) {
    return (
      <EmptyPage
        title="Something went wrong"
        description="Please try again later."
        icon={<AlertCircle css={iconPrimaryXlStyle} />}
      />
    )
  }

  if (!urlDetail) {
    return (
      <EmptyPage
        title="URL not found"
        description="The URL you are looking for does not exist."
        icon={<Link2Off css={iconPrimaryXlStyle} />}
      />
    )
  }

  const result: IShortUrlDetail = urlDetail
  switch (result.shortUrlType) {
    case SHORTURL_TYPE.NORMAL:
      return <NormalEntryPoint urlDetail={result} />
    case SHORTURL_TYPE.EXPIRED:
      return <ExpiredExtryPoint urlDetail={result} />
    case SHORTURL_TYPE.SCHEDULED:
      return <ScheduleEntryPoint urlDetail={result} />
    case SHORTURL_TYPE.PROTECTED:
      return <ProtectedEntryPoint urlDetail={result} />
    default:
      return <EmptyPage />
  }
}

export default EntryPoint
