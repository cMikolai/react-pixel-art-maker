import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown, faArrowsAltV, faArrowsAltH } from '@fortawesome/free-solid-svg-icons'

import { ColorWrapper, Option, MenuIcon, SecondLevelIcon, Label, Input, Submit } from './styled'

const adjustCellHeight = () => {
  const tableCells = document.querySelectorAll("#pixel_canvas td")

  if (tableCells.length > 0) {
    const tableCellWidth = document.querySelector("#pixel_canvas td").offsetWidth

    if (tableCellWidth < 22) {
      tableCells.forEach(cell => cell.style.height = tableCellWidth + 'px')
    }
  }
}

const SizePicker = () => {
  const [height, setHeight] = useState(1)
  const [width, setWidth] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()

    const canvas = document.querySelector("#pixel_canvas")
    canvas.innerHTML = ''

    for (let x = 0; x < height; x++) {
      let row = document.createElement("tr")
      canvas.appendChild(row)

      for (let y = 0; y < width; y++) {
        let cell = document.createElement("td")
        row.appendChild(cell)
      }
    }

    adjustCellHeight()
  }

  return (
    <form id="sizePicker">
      <Label>
        <SecondLevelIcon>
          <FontAwesomeIcon icon={faArrowsAltV} />
        </SecondLevelIcon>
        Grid Height:

        <Input
          type="number"
          id="input_height"
          name="height"
          min="1"
          value={height}
          onChange={e => setHeight(e.target.value)} />
      </Label>

      <Label>
        <SecondLevelIcon>
          <FontAwesomeIcon icon={faArrowsAltH} />
        </SecondLevelIcon>
        Grid Width:

        <Input
          type="number"
          id="input_width"
          name="width"
          min="1"
          value={width}
          onChange={e => setWidth(e.target.value)} />
      </Label>

      <Submit
        type="submit"
        id="input_submit"
        value="Create grid"
        onClick={(e) => handleSubmit(e)}
        />
    </form>
  )
}


const GridSize = () => {
  const [isOpenOption, toggleOpenOption] = useState(false);

  return (
    <>
      <Option onClick={() => toggleOpenOption(!isOpenOption)}>
        <MenuIcon>
          <FontAwesomeIcon icon={isOpenOption ? faAngleDown : faAngleRight} />
        </MenuIcon>
        Grid Size
      </Option>
      {
        isOpenOption && <SizePicker />
      }
    </>
  )
}

export default GridSize
