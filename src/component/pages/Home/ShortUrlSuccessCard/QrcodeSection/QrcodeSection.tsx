import { Qrcode } from '@/component/common'

import { qrcodeSectionStyle } from './QrcodeSection.style'

const QrcodeSection = ({ isOpen, value }: { isOpen: boolean; value: string }) => {
  if (!isOpen) return null
  return (
    <div css={qrcodeSectionStyle}>
      <Qrcode value={value} />
    </div>
  )
}

export default QrcodeSection
