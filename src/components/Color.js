import React, { useState } from 'react'
import styled from 'styled-components'
import { CirclePicker } from 'react-color'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Option = styled.h2`
  color: #fff;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`

const MenuIcon = styled.span`
  display: inline-block;
  width: 16px;
  margin-right: 5px;
  font-size: 14px;
  height: 100%;
`

const ColorWrapper = styled.div`
  margin-bottom: 20px;

  & span div {
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 12px !important;
  }

  & span div span div {
    border: 1px solid black;
  }
`

const Hint = styled.p`
  font-size: 12px;
  margin-top: 20px;
`

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
