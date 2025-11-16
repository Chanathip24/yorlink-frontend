import { Outlet } from 'react-router-dom'

import OutletWrapper from './OutletWrapper'

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* navbar */}
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </div>
  )
}

export default Layout
