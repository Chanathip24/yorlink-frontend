import { QRCodeCanvas } from 'qrcode.react'

const Qrcode = ({ value }: { value: string }) => {
  return <QRCodeCanvas value={value} size={180} />
}

export default Qrcode
