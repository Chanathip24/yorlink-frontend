import type { YorLinkApiQueryClientKey } from '@/type'

import { YorLinkBaseClient } from './YorLinkBaseClient'

export class YorLinkQueryClient extends YorLinkBaseClient {
  readonly key: Record<YorLinkApiQueryClientKey, string> = {
    urlDetail: 'urlDetail',
  }
}
