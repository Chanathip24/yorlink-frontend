import { atomWithStorage } from 'jotai/utils'

import type { IShortUrlResponse, Maybe } from '@/type'
import { parseStorageKey } from '@/utilities'

export type UrlHistoryState = {
  urlHistory: Maybe<Array<IShortUrlResponse>>
}

const DEFAULT_URL_HISTORY_STATE: UrlHistoryState = {
  urlHistory: [],
}
export const urlHistoryAtom = atomWithStorage<UrlHistoryState>(
  parseStorageKey('urlhistory'),
  DEFAULT_URL_HISTORY_STATE,
  undefined,
  {
    getOnInit: true,
  },
)
