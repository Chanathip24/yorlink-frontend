import { useMutation } from '@tanstack/react-query'

import { YORLINK_API_BASE_URL } from '@/config'
import { YorLinkExecuteClient } from '@/hook'
import type { IAccessProtectedUrlPayload, IUseYorLinkApiAccessProtectedUrlResponse } from '@/type'

export const useYorLinkAccessProtectedUrl = (): IUseYorLinkApiAccessProtectedUrlResponse => {
  const yorLinkExecuteClient: YorLinkExecuteClient = new YorLinkExecuteClient(YORLINK_API_BASE_URL)
  return useMutation<void, Error, IAccessProtectedUrlPayload>({
    mutationKey: [yorLinkExecuteClient.key.accessProtectedUrl],
    mutationFn: (payload: IAccessProtectedUrlPayload) => yorLinkExecuteClient.accessProtectedUrl(payload),
  })
}
