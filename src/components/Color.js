import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { ColorWrapper, Option, MenuIcon, Hint } from './styled'

const Color = props => {
  const { color, setColor } = props
  const [ isOpenOption, toggleOpenOption ] = useState(false)

  return (
    <>
      <Option onClick={ () => toggleOpenOption(!isOpenOption) }>
        <MenuIcon>
          <FontAwesomeIcon icon={isOpenOption ? faAngleDown : faAngleRight} />
        </MenuIcon>
        Color
      </Option>
      {
        isOpenOption &&
        <ColorWrapper>
          <CirclePicker
            onChangeComplete={ (color) => setColor(color.hex) }
            color={ color } />

        <Hint>Hint: Double click to remove a color</Hint>
        </ColorWrapper>
      }
    </>
  )
}

export default Color
