import type {
  IYorLinkApiClientUrlDetailWithAliasResponse,
  IYorLinkApiGetUrlDetailWithAliasParams,
  YorLinkApiQueryClientKey,
} from '@/type'

import { YorLinkBaseClient } from './YorLinkBaseClient'

export class YorLinkQueryClient extends YorLinkBaseClient {
  readonly key: Record<YorLinkApiQueryClientKey, string> = {
    urlDetailWithAlias: 'urlDetailWithAlias',
  }

  async urlDetailWithAlias(
    params: IYorLinkApiGetUrlDetailWithAliasParams,
  ): Promise<IYorLinkApiClientUrlDetailWithAliasResponse['data']> {
    const response = await this.axiosInstance.get<IYorLinkApiClientUrlDetailWithAliasResponse>(
      `/api/public/url/detail`,
      {
        params,
      },
    )
    return response.data.data
  }
}
