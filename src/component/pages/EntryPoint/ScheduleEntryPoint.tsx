import { Clock } from 'lucide-react'
import { useEffect, useMemo } from 'react'

import { iconPrimaryXlStyle } from '@/styles'
import type { IShortUrlDetail } from '@/type'
import { formatDate } from '@/utilities'

import { EmptyPage } from '../EmptyPage'

type IScheduleEntryPointProps = {
  urlDetail: IShortUrlDetail
}
const ScheduleEntryPoint = ({ urlDetail }: IScheduleEntryPointProps) => {
  const { originalUrl, isActive, activationDate } = urlDetail
  const activationDateFormatted: string = useMemo(
    () => formatDate(new Date(activationDate), 'DD/MM/YYYY'),
    [activationDate],
  )

  if (!isActive || new Date(activationDate) > new Date()) {
    return (
      <EmptyPage
        title="This URL is not yet active"
        description="Oops! This link is not yet active."
        extraDescription={`It will be active on ${activationDateFormatted}`}
        icon={<Clock css={iconPrimaryXlStyle} />}
      />
    )
  }

  useEffect(() => {
    if (!originalUrl) return
    window.location.replace(originalUrl)
  }, [originalUrl])

  return <div>ScheduleEntryPoint</div>
}

export default ScheduleEntryPoint
