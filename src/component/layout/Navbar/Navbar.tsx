import { Link2 } from 'lucide-react'
import { useCallback } from 'react'
import { type NavigateFunction, useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constant'
import { description, flexColumn, highlightPrimaryGradient } from '@/styles'

import { descriptionSizeStyle, iconSizeStyle, iconWrapperStyle, NavbarStyle, navbarWrapperStyle } from './Navbar.style'

const Navbar = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigateToHome = useCallback(() => {
    navigate(ROUTES.HOME.path)
  }, [navigate])

  return (
    <div css={NavbarStyle}>
      {/* logo */}
      <div onClick={handleNavigateToHome} css={navbarWrapperStyle}>
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
