import type { PropsWithChildren } from 'react'

const OutletWrapper = ({ children }: PropsWithChildren) => {
  return <div className="min-h-[calc(100dvh-var(--header-height))] overflow-y-auto">{children}</div>
}

export default OutletWrapper
