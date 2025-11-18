import type { SerializedStyles } from '@emotion/react'
import type { PropsWithChildren } from 'react'

import { PageSectionStyle } from './PageSection.style'

type IPageSectionProps = PropsWithChildren<{
  extraStyles?: SerializedStyles | Array<SerializedStyles>
}>

const PageSection = ({ children, extraStyles }: IPageSectionProps) => {
  return <div css={[PageSectionStyle, extraStyles]}>{children}</div>
}

export default PageSection
