import { useMutation } from '@tanstack/react-query'

import { YORLINK_API_BASE_URL } from '@/config'
import { YorLinkExecuteClient } from '@/hook/client/YorLinkExecuteClient'
import type { IShortUrlRequest, IUseYorLinkApiShortUrlResponse, IYorLinkApiClientShortUrlResponse } from '@/type'

export const useYorLinkApiShortenUrl = (): IUseYorLinkApiShortUrlResponse => {
  const yorlinkExecuteClient: YorLinkExecuteClient = new YorLinkExecuteClient(YORLINK_API_BASE_URL)
  return useMutation<IYorLinkApiClientShortUrlResponse['data'], Error, IShortUrlRequest>({
    mutationKey: [yorlinkExecuteClient.key.shortenUrl],
    mutationFn: async (request: IShortUrlRequest) => {
      return yorlinkExecuteClient.shortenUrl(request)
    },
  })
}
