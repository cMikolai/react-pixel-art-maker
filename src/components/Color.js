import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { SidebarColorWrapper, SidebarOption, SidebarMenuIcon, SidebarHint } from './styled'

const Color = props => {
  const { color, setColor } = props
  const [ isOpenOption, toggleOpenOption ] = useState(false)

  return (
    <>
      <SidebarOption onClick={ () => toggleOpenOption(!isOpenOption) }>
        <SidebarMenuIcon>
          <FontAwesomeIcon icon={isOpenOption ? faAngleDown : faAngleRight} />
        </SidebarMenuIcon>
        Color
      </SidebarOption>
      {
        isOpenOption &&
        <SidebarColorWrapper>
          <CirclePicker
            onChangeComplete={ (color) => setColor(color.hex) }
            color={ color } />

        <SidebarHint>Hint: Double click to remove a color</SidebarHint>
        </SidebarColorWrapper>
      }
    </>
  )
}

export default Color
