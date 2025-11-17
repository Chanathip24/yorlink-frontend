import { css, type SerializedStyles } from '@emotion/react'
import { Outlet } from 'react-router-dom'

import { Navbar } from './Navbar'
import { OutletWrapper } from './OutletWrapper'

const Layout = () => {
  const divStyle: SerializedStyles = css`
    min-height: 100vh;
  `
  return (
    <div css={divStyle}>
      {/* navbar */}
      <Navbar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </div>
  )
}

export default Layout
