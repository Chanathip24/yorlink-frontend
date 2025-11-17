import type { SerializedStyles } from '@emotion/react'
import type { PropsWithChildren } from 'react'

import { PageSectionStyle } from './PageSection.style'

type IPageSectionProps = PropsWithChildren<{
  css?: SerializedStyles | Array<SerializedStyles>
}>

const PageSection = ({ children, css }: IPageSectionProps) => {
  return <div css={[PageSectionStyle, css]}>{children}</div>
}

export default PageSection
