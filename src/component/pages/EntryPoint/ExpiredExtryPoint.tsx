import { Clock } from 'lucide-react'
import { useEffect } from 'react'

import { EmptyPage } from '@/component/pages/EmptyPage'
import { iconPrimaryXlStyle } from '@/styles'
import type { IShortUrlDetail } from '@/type'

type IExpiredExtryPointProps = {
  urlDetail: IShortUrlDetail
}
const ExpiredExtryPoint = ({ urlDetail }: IExpiredExtryPointProps) => {
  const { originalUrl, isActive, expirationDate } = urlDetail

  if (!isActive || new Date(expirationDate) < new Date()) {
    return (
      <EmptyPage
        title="This URL is no longer available"
        description="Oops! This link has expired or reached its click limit."
        icon={<Clock css={iconPrimaryXlStyle} />}
      />
    )
  }

  useEffect(() => {
    if (!originalUrl) return
    window.location.replace(originalUrl)
  }, [originalUrl])

  return null
}

export default ExpiredExtryPoint
