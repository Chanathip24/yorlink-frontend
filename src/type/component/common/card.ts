import type { HTMLAttributes, PropsWithChildren } from 'react'

import type { IExtraStyles } from '@/type'

export type ICardBaseProps = HTMLAttributes<HTMLDivElement> & IExtraStyles

export type ICardProps = PropsWithChildren<ICardBaseProps>

export type ICardContentProps = PropsWithChildren<ICardBaseProps>

export type ICardHeaderProps = PropsWithChildren<ICardBaseProps>

export type ICardTitleProps = PropsWithChildren<ICardBaseProps>

export type ICardDescriptionProps = PropsWithChildren<ICardBaseProps>
