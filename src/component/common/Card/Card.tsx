import type { ICardContentProps, ICardDescriptionProps, ICardHeaderProps, ICardProps, ICardTitleProps } from '@/type'

import { cardDescriptionStyle, cardHeaderStyle, cardStyle, cardTitleStyle } from './Card.style'

export const Card = ({ children, extraStyles, ...props }: ICardProps) => {
  return (
    <div css={[cardStyle, extraStyles]} {...props}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, extraStyles, ...props }: ICardContentProps) => {
  return (
    <div css={[extraStyles]} {...props}>
      {children}
    </div>
  )
}

export const CardHeader = ({ children, extraStyles, ...props }: ICardHeaderProps) => {
  return (
    <div css={[cardHeaderStyle, extraStyles]} {...props}>
      {children}
    </div>
  )
}

export const CardTitle = ({ children, extraStyles, ...props }: ICardTitleProps) => {
  return (
    <div css={[cardTitleStyle, extraStyles]} {...props}>
      {children}
    </div>
  )
}

export const CardDescription = ({ children, extraStyles, ...props }: ICardDescriptionProps) => {
  return (
    <div css={[cardDescriptionStyle, extraStyles]} {...props}>
      {children}
    </div>
  )
}
