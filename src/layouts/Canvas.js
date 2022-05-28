import React, { useState, useEffect } from 'react'

import { GlobalTableStyle, CanvasContainer } from '../components/styled'

const adjustCellHeight = () => {
  const tableCells = document.querySelectorAll("#pixel_canvas td")

  if (tableCells.length > 0) {
    const tableCellWidth = document.querySelector("#pixel_canvas td").offsetWidth

    if (tableCellWidth < 22) {
      tableCells.forEach(cell => cell.style.height = tableCellWidth + 'px')
    }
  }
}

const Canvas = props => {
  const { bgColor, color } = props
  const [ isMouseDown, setMouseDown ] = useState(false)

  useEffect(() => {
    adjustCellHeight()
    window.addEventListener('resize', adjustCellHeight)
  })

  return (
    <CanvasContainer>
      <GlobalTableStyle />
      <table
        id="pixel_canvas"
        style={{ backgroundColor: bgColor }}
        onMouseDown={ (e) => {
          e.target.style.backgroundColor = color;
          setMouseDown(true)
        }}
        onMouseMove={
          isMouseDown ? (e) => {
            e.target.style.backgroundColor = color;
            setMouseDown(true)
          } : null }
        onMouseUp={ () => setMouseDown(false) }
        onMouseLeave={ () => setMouseDown(false) }
        onTouchStart={ (e) => {
          e.target.style.backgroundColor = color;
          setMouseDown(true)
        }}
        onTouchMove={
          isMouseDown ? (e) => {
            e.target.style.backgroundColor = color;
            setMouseDown(true)
          } : null }
        onTouchEnd={ () => setMouseDown(false) }
        onDoubleClick={ (e) => { e.target.style.backgroundColor = '' }} />
    </CanvasContainer>
  )
}

export default Canvas
