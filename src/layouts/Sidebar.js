import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import GridSize from '../components/GridSize.js'
import BackgroundColor from '../components/BackgroundColor.js'
import Color from '../components/Color.js'

import { SidebarContainer, TopSection, SidebarIcon, MainSection, Setting, SidebarTitle, FooterSection } from '../components/styled'

const Sidebar = props => {
  const { isOpen, toggleOpen, bgColor, setBgColor, color, setColor } = props

  return (
    <SidebarContainer>
      <TopSection>
        {
          isOpen &&
          <SidebarIcon>
            <FontAwesomeIcon
              size="lg"
              icon={ faXmark }
              onClick={() => toggleOpen(false)} />
          </SidebarIcon>
        }
      </TopSection>

      <MainSection>

        <SidebarTitle>Canvas Settings</SidebarTitle>

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

      <FooterSection>
        made by <a href="https://github.com/cMikolai">cMikolai</a>
      </FooterSection>

    </SidebarContainer>
  )
}

export default Sidebar
