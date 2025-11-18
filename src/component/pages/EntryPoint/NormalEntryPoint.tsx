import { useEffect } from 'react'

import type { IShortUrlDetail } from '@/type'

type INormalEntryPointProps = {
  urlDetail: IShortUrlDetail
}
const NormalEntryPoint = ({ urlDetail }: INormalEntryPointProps) => {
  const { originalUrl } = urlDetail

  useEffect(() => {
    if (!originalUrl) return
    window.location.replace(originalUrl)
  }, [originalUrl])

  return null
}

export default NormalEntryPoint
