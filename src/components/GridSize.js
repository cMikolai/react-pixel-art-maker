import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown, faArrowsAltV, faArrowsAltH } from '@fortawesome/free-solid-svg-icons'

import { SidebarOption, SidebarMenuIcon, SidebarSecondLevelIcon, SidebarLabel, SidebarInput, SidebarSubmit } from './styled'
import { adjustCellHeight } from '../helpers/CanvasCells'

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
      <SidebarLabel>
        <SidebarSecondLevelIcon>
          <FontAwesomeIcon icon={faArrowsAltV} />
        </SidebarSecondLevelIcon>
        Grid Height:

        <SidebarInput
          type="number"
          id="input_height"
          name="height"
          min="1"
          value={height}
          onChange={e => setHeight(e.target.value)} />
      </SidebarLabel>

      <SidebarLabel>
        <SidebarSecondLevelIcon>
          <FontAwesomeIcon icon={faArrowsAltH} />
        </SidebarSecondLevelIcon>
        Grid Width:

        <SidebarInput
          type="number"
          id="input_width"
          name="width"
          min="1"
          value={width}
          onChange={e => setWidth(e.target.value)} />
      </SidebarLabel>

      <SidebarSubmit
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
      <SidebarOption onClick={() => toggleOpenOption(!isOpenOption)}>
        <SidebarMenuIcon>
          <FontAwesomeIcon icon={isOpenOption ? faAngleDown : faAngleRight} />
        </SidebarMenuIcon>
        Grid Size
      </SidebarOption>
      {
        isOpenOption && <SizePicker />
      }
    </>
  )
}

export default GridSize
