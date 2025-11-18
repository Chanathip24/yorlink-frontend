import { Root } from '@radix-ui/react-label'
import type { ComponentProps } from 'react'

import { labelStyle } from './Label.style'

function Label({ ...props }: ComponentProps<typeof Root>) {
  return <Root data-slot="label" css={labelStyle} {...props} />
}

export { Label }
