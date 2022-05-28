import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ColorWrapper, Option, MenuIcon } from './styled'

const BackgroundColor = props => {
  const { bgColor, setBgColor } = props
  const [ isOpenOption, toggleOpenOption ] = useState(false)

  return (
    <>
      <Option onClick={ () => toggleOpenOption(!isOpenOption) }>
        <MenuIcon>
          <FontAwesomeIcon icon={ isOpenOption ? faAngleDown : faAngleRight } />
        </MenuIcon>
        Background Color
      </Option>
      {
        isOpenOption &&
        <ColorWrapper>
          <CirclePicker
            onChangeComplete={ (color) => setBgColor(color.hex) }
            color={ bgColor } />
        </ColorWrapper>
      }
    </>
  )
}

export default BackgroundColor
