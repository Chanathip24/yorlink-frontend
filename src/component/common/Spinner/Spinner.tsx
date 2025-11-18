import { Loader2 } from 'lucide-react'

import { highlightPrimary } from '@/styles'
import type { IExtraStyles } from '@/type'

import { spinnerStyle } from './Spinner.style'

type ISpinnerProps = IExtraStyles
export const Spinner = ({ extraStyles }: ISpinnerProps) => {
  return (
    <div css={spinnerStyle}>
      <Loader2 css={[highlightPrimary, extraStyles]} />
    </div>
  )
}
