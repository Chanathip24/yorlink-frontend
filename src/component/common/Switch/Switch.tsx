import { Root, Thumb } from '@radix-ui/react-switch'
import type { ComponentProps } from 'react'

import { switchStyle, switchThumbStyle } from './Switch.style'

const Switch = ({ ...props }: ComponentProps<typeof Root>) => {
  return (
    <Root data-slot="switch" css={switchStyle} {...props}>
      <Thumb data-slot="switch-thumb" css={switchThumbStyle} />
    </Root>
  )
}

export default Switch
