import { useMutation } from '@tanstack/react-query'

import { YORLINK_API_BASE_URL } from '@/config'
import { YorLinkExecuteClient } from '@/hook'
import type { IUseYorLinkApiDeleteUrlResponse } from '@/type'

/**
 * Returns a hook for deleting a URL.
 *
 * @function useYorLinkDeleteUrl
 * @returns {IUseYorLinkApiDeleteUrlResponse} The hook for deleting a URL.
 */
export const useYorLinkDeleteUrl = (): IUseYorLinkApiDeleteUrlResponse => {
  const yorlinkExecuteClient: YorLinkExecuteClient = new YorLinkExecuteClient(YORLINK_API_BASE_URL)
  return useMutation<void, Error, string>({
    mutationKey: [yorlinkExecuteClient.key.deleteUrl],
    mutationFn: async (urlId: string) => {
      return yorlinkExecuteClient.deleteUrl(urlId)
    },
  })
}
