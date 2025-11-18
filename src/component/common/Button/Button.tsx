import { css, type SerializedStyles } from '@emotion/react'
import { Slot } from '@radix-ui/react-slot'

import type { ButtonProps, Maybe } from '@/type'

import { StyledButton } from './Button.style'

// Main component
const Button = ({ asChild = false, variant, block = false, size, ...props }: ButtonProps & { block?: boolean }) => {
  const Comp = asChild ? Slot : StyledButton
  const extraStyles: Maybe<SerializedStyles> = block
    ? css`
        width: 100%;
      `
    : undefined
  return <Comp variant={variant} size={size} css={extraStyles} {...props} />
}

export { Button }
