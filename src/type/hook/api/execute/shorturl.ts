import type { SHORTURL_TYPE } from '@/enum'
import type { IBaseUseMutation, IYorLinkApiClientBaseResponse } from '@/type'

export type IAccessProtectedUrlPayload = {
  id: string
  password: string
}

export type IUseYorLinkApiAccessProtectedUrlResponse = IBaseUseMutation<void, IAccessProtectedUrlPayload>
export type IShortUrlRequest = {
  url: string
  type: SHORTURL_TYPE
  activationDate: string
  expirationDate: string
  maximumClick: number
  password: string
  passwordHint: string
  isCustomAlias: boolean
  alias: string
}
export type IShortUrlResponse = {
  id: string
  alias: string
  originalUrl: string
  shortUrlType: SHORTURL_TYPE
  activationDate: string
  expirationDate: string
  createdAt: string
}

//response
export type IYorLinkApiClientShortUrlResponse = IYorLinkApiClientBaseResponse<IShortUrlResponse>

//hook
export type IUseYorLinkApiShortUrlResponse = IBaseUseMutation<
  IYorLinkApiClientShortUrlResponse['data'],
  IShortUrlRequest
>

//hook
export type IUseYorLinkApiDeleteUrlResponse = IBaseUseMutation<void, string>
