import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #3F51B5;
  height: 20vh;
  color: #fff;
  align-items: center;
  position: relative;
`

const Icon = styled.div`
  font-size: 18px;
  z-index: 1;
  left: 20px;
  position: absolute;
`

const Title = styled.h1`
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: calc(18px + 2vmin);
  width: 100%;
`

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
