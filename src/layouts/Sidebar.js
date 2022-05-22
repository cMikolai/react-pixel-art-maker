import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import GridSize from '../components/GridSize.js'
import BackgroundColor from '../components/BackgroundColor.js'
import Color from '../components/Color.js'

const Container = styled.div`
  background-color: #3F51B5;
  color: #fff;
  margin: 0;
  font-size: calc(16px + 2vmin);
  min-height: 100vh;
  height: 100%;
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

const Icon = styled.div`
  cursor: pointer;
`

const MainSection = styled.div`
  padding: 20px;
`

const Setting = styled.div`
  border-bottom: 1px solid #fff;
`

const Title = styled.h2`
  color: #fff;
  margin: 0 0 20px 0;
  font-size: 16px;
  width: 100%;
`

const Sidebar = props => {
  const { isOpen, toggleOpen, bgColor, setBgColor, color, setColor } = props

  return (
    <Container>
      <TopSection>
        {
          isOpen &&
          <Icon>
            <FontAwesomeIcon
              size="lg"
              icon={ faXmark }
              onClick={() => toggleOpen(false)} />
          </Icon>
        }
      </TopSection>

      <MainSection>

        <Title>Canvas Settings</Title>

          <Setting>
            <GridSize />
          </Setting>

          <Setting>
            <BackgroundColor
              bgColor={ bgColor }
              setBgColor={ setBgColor } />
          </Setting>

          <Setting>
            <Color
              color={ color }
              setColor={ setColor } />
          </Setting>

      </MainSection>

    </Container>
  )
}

export default Sidebar
