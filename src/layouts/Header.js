import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Container, HeaderIcon, HeaderTitle } from '../components/styled'

const Header = props => {
  const { isOpen, toggleOpen } = props

  return (
    <Container
      display="flex"
      height="90px"
      bgColor="#3F51B5"
      color="#fff"
      alignItems="center"
      position="relative">
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
    </Container>
  )
}

export default Header
