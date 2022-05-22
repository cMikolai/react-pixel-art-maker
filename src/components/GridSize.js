import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown, faArrowsAltV, faArrowsAltH } from '@fortawesome/free-solid-svg-icons'

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

const SecondLevelIcon = styled.span`
  display: inline-block;
  width: 20px;
  margin-right: 3px;
  font-size: 12px;
  height: 100%;
  text-align: center;
`

const Label = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-size: 12px;
  padding: 10px 0 10px 15px;
  border-radius: 5px;
  border: none;
  max-width: 150px;
  margin: 5px 0 5px 15px;
`

const Submit = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-size: 12px;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  border: none;
  width: 100%;
  margin: 0 0 20px 0;
  background-color: #E81E63;
  color: #fff;
  cursor: pointer;
`

const SizePicker = () => {
  const [height, setHeight] = useState(1);
  const [width, setWidth] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const canvas = document.querySelector("#pixel_canvas");
    canvas.innerHTML = '';

    for (let x = 0; x < height; x++) {
      let row = document.createElement("tr");
      canvas.appendChild(row);

      for (let y = 0; y < width; y++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
      }
    }
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
