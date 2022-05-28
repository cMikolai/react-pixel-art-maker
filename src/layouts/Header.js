import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Container, Icon, Title } from '../components/styled'

const Header = props => {
  const { isOpen, toggleOpen } = props

  return (
    <Container>
      {
        !isOpen &&
        <Icon>
          <FontAwesomeIcon
            size="lg"
            icon={ faBars }
            onClick={() => toggleOpen(true)} />
        </Icon>
      }
      <Title>Pixel Art Maker</Title>
    </Container>
  )
}

export default Header
