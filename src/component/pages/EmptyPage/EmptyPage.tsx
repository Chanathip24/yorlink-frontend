import { PackageOpen } from 'lucide-react'
import { type ReactNode, useCallback } from 'react'
import { type NavigateFunction, useNavigate } from 'react-router-dom'

import { Button } from '@/component/common'
import { ROUTES } from '@/constant'
import { flexColumn } from '@/styles'

import { cardStyle, containerStyle, headingStyle, iconContainerStyle, textStyle } from './EmptyPage.style'

type IEmptyPageProps = {
  title?: string
  description?: string
  icon?: ReactNode
  extraDescription?: string
}
const EmptyPage = ({
  title = 'No Items Found',
  description = "It looks like there's nothing here yet. Start by adding your first item to get things rolling!",
  icon = <PackageOpen />,
  extraDescription,
}: IEmptyPageProps) => {
  const navigate: NavigateFunction = useNavigate()
  const handleGoToHomepage = useCallback(() => {
    navigate(ROUTES.HOME.path)
  }, [navigate])
  return (
    <div css={containerStyle}>
      <div css={cardStyle}>
        <div css={iconContainerStyle}>{icon}</div>

        <h1 css={headingStyle}>{title}</h1>
        <p css={[textStyle, flexColumn]}>
          {description}
          {extraDescription && <span css={description}>{extraDescription}</span>}
        </p>
        <Button onClick={handleGoToHomepage}>Go to Homepage</Button>
      </div>
    </div>
  )
}

export default EmptyPage
