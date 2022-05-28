import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { SidebarColorWrapper, SidebarOption, SidebarMenuIcon } from './styled'

const BackgroundColor = props => {
  const { bgColor, setBgColor } = props
  const [ isOpenOption, toggleOpenOption ] = useState(false)

  return (
    <>
      <SidebarOption onClick={ () => toggleOpenOption(!isOpenOption) }>
        <SidebarMenuIcon>
          <FontAwesomeIcon icon={ isOpenOption ? faAngleDown : faAngleRight } />
        </SidebarMenuIcon>
        Background Color
      </SidebarOption>
      {
        isOpenOption &&
        <SidebarColorWrapper>
          <CirclePicker
            onChangeComplete={ (color) => setBgColor(color.hex) }
            color={ bgColor } />
        </SidebarColorWrapper>
      }
    </>
  )
}

export default BackgroundColor
