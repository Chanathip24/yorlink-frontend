import { useQuery } from '@tanstack/react-query'

import { YORLINK_API_BASE_URL } from '@/config'
import { YorLinkQueryClient } from '@/hook'
import type {
  IUseYorLinkApiUrlDetailWithAliasResponse,
  IYorLinkApiClientUrlDetailWithAliasResponse,
  IYorLinkApiGetUrlDetailWithAliasParams,
} from '@/type'

export const useYorLinkApiGetUrlDetailWithAlias = (
  params: IYorLinkApiGetUrlDetailWithAliasParams,
): IUseYorLinkApiUrlDetailWithAliasResponse => {
  const yorlinkQueryClient: YorLinkQueryClient = new YorLinkQueryClient(YORLINK_API_BASE_URL)
  return useQuery<IYorLinkApiClientUrlDetailWithAliasResponse['data']>({
    queryKey: [yorlinkQueryClient.key.urlDetailWithAlias, params.alias],
    queryFn: () => yorlinkQueryClient.urlDetailWithAlias(params),
    enabled: !!params.alias,
  })
}
