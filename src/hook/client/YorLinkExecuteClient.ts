import type { IShortUrlRequest, IYorLinkApiClientShortUrlResponse, YorLinkApiExecuteClientKey } from '@/type'

import { YorLinkBaseClient } from './YorLinkBaseClient'

export class YorLinkExecuteClient extends YorLinkBaseClient {
  readonly key: Record<YorLinkApiExecuteClientKey, string> = {
    shortenUrl: 'shortenUrl',
    deleteUrl: 'deleteUrl',
  }

  async shortenUrl(request: IShortUrlRequest): Promise<IYorLinkApiClientShortUrlResponse['data']> {
    const response = await this.axiosInstance.post<IYorLinkApiClientShortUrlResponse>('/api/public/url', request)
    return response.data.data
  }

  async deleteUrl(urlId: string): Promise<void> {
    await this.axiosInstance.delete<IYorLinkApiClientShortUrlResponse>(`/api/public/url/${urlId}`)
  }
}
