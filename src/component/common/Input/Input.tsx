import type { IInputProps } from '@/type'

import { inputContainerStyle, inputErrorStyle, inputStyle, inputWrapperStyle } from './Input.style'

function Input({ type, prefix, suffix, ref, error, ...props }: IInputProps) {
  return (
    <div css={inputContainerStyle}>
      <div css={inputWrapperStyle}>
        {prefix && <div>{prefix}</div>}
        <input type={type} css={inputStyle} ref={ref} {...props} />
        {suffix && <div>{suffix}</div>}
      </div>
      {error && <span css={inputErrorStyle}>{error}</span>}
    </div>
  )
}

export { Input }
