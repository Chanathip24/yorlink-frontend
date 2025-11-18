import type { SHORTURL_TYPE } from '@/enum'
import type { IBaseUseQuery, IYorLinkApiClientBaseResponse } from '@/type'

export type IShortUrlDetail = {
  originalUrl: string
  id: string
  alias: string
  shortUrlType: SHORTURL_TYPE
  createdAt: string
  totalClicks: number
  isActive: boolean
  passwordHint: string
  expirationDate: string
  activationDate: string
}
export type IYorLinkApiClientUrlDetailWithAliasResponse = IYorLinkApiClientBaseResponse<IShortUrlDetail>
export type IUseYorLinkApiUrlDetailWithAliasResponse = IBaseUseQuery<
  IYorLinkApiClientUrlDetailWithAliasResponse['data']
>

export type IYorLinkApiGetUrlDetailWithAliasParams = {
  alias: string
}
