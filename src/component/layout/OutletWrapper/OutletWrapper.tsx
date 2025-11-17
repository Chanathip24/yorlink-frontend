import type { PropsWithChildren } from 'react'

import { OutletWrapperStyle } from './OutletWrapper.style'

const OutletWrapper = ({ children }: PropsWithChildren) => {
  return <div css={OutletWrapperStyle}>{children}</div>
}

export default OutletWrapper
