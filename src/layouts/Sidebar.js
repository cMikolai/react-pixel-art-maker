import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import GridSize from '../components/GridSize.js'
import BackgroundColor from '../components/BackgroundColor.js'
import Color from '../components/Color.js'

import { SidebarContainer, SidebarTopSection, SidebarIcon, SidebarMainSection, SidebarSetting, SidebarTitle, SidebarFooter } from '../components/styled'

const Sidebar = props => {
  const { isOpen, toggleOpen, bgColor, setBgColor, color, setColor } = props

  return (
    <SidebarContainer>
      <SidebarTopSection>
        {
          isOpen &&
          <SidebarIcon>
            <FontAwesomeIcon
              size="lg"
              icon={ faXmark }
              onClick={() => toggleOpen(false)} />
          </SidebarIcon>
        }
      </SidebarTopSection>

      <SidebarMainSection>

        <SidebarTitle>Canvas Settings</SidebarTitle>

          <SidebarSetting>
            <GridSize />
          </SidebarSetting>

          <SidebarSetting>
            <BackgroundColor
              bgColor={ bgColor }
              setBgColor={ setBgColor } />
          </SidebarSetting>

          <SidebarSetting>
            <Color
              color={ color }
              setColor={ setColor } />
          </SidebarSetting>

      </SidebarMainSection>

      <SidebarFooter>
        made by <a href="https://github.com/cMikolai">cMikolai</a>
      </SidebarFooter>

    </SidebarContainer>
  )
}

export default Sidebar
