import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { HeaderContainer, HeaderIcon, HeaderTitle } from '../components/styled'

const Header = props => {
  const { isOpen, toggleOpen } = props

  return (
    <HeaderContainer>
      {
        !isOpen &&
        <HeaderIcon>
          <FontAwesomeIcon
            size="lg"
            icon={ faBars }
            onClick={() => toggleOpen(true)} />
        </HeaderIcon>
      }
      <HeaderTitle>Pixel Art Maker</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
