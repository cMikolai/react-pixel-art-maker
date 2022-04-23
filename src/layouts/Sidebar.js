import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  background-color: #3F51B5;
  color: #fff;
  margin: 0;
  font-size: calc(16px + 2vmin);
  height: 100vh;
  flex: 1 0 300px;
  position: relative;

  @media (max-width: 767px) {
    position: fixed;
    width: 300px;
    z-index: 1;
    box-shadow: 2px 5px 10px black;
  }
`

const TopSection = styled.div`
  height: 20vh;
  font-size: 18px;
  align-items: center;
  display: flex;
  justify-content: right;
  padding-right: 20px;
`

const Title = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 12px;
  width: 100%;
`

const Sidebar = props => {
  const { isOpen, toggleOpen } = props

  return (
    <Container>
      <TopSection>
        {
          isOpen &&
          <FontAwesomeIcon
            size="lg"
            icon={ faXmark }
            onClick={() => toggleOpen(false)} />
        }
      </TopSection>

      <Title>Canvas Settings</Title>

    </Container>
  )
}

export default Sidebar
