import { Link2 } from 'lucide-react'

import { description, flexColumn, highlightPrimaryGradient } from '@/styles'

import { descriptionSizeStyle, iconSizeStyle, iconWrapperStyle, NavbarStyle, navbarWrapperStyle } from './Navbar.style'

const Navbar = () => {
  return (
    <div css={NavbarStyle}>
      {/* logo */}
      <div css={navbarWrapperStyle}>
        <div css={iconWrapperStyle}>
          <Link2 css={[iconSizeStyle]} />
        </div>
        <div css={flexColumn}>
          <h4 css={highlightPrimaryGradient}>YORLINK</h4>
          <p css={[description, descriptionSizeStyle]}>Advanced URL Shortener</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
