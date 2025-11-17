import type { IShortUrlRequest, IYorLinkApiClientShortUrlResponse, YorLinkApiExecuteClientKey } from '@/type'

import { YorLinkBaseClient } from './YorLinkBaseClient'

export class YorLinkExecuteClient extends YorLinkBaseClient {
  readonly key: Record<YorLinkApiExecuteClientKey, string> = {
    shortenUrl: 'shortenUrl',
  }

  async shortenUrl(request: IShortUrlRequest): Promise<IYorLinkApiClientShortUrlResponse['data']> {
    const response = await this.axiosInstance.post<IYorLinkApiClientShortUrlResponse>('/api/public/url', request)
    return response.data.data
  }
}
