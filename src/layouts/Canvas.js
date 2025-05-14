import React, { useState, useEffect } from 'react'

import { GlobalTableStyle, CanvasContainer } from '../components/styled'
import { adjustCellHeight } from '../helpers/CanvasCells'

const Canvas = props => {
  const { bgColor, color } = props
  const [ isMouseDown, setMouseDown ] = useState(false)

  useEffect(() => {
    adjustCellHeight()
    window.addEventListener('resize', adjustCellHeight)
    return () => window.removeEventListener('resize', adjustCellHeight)
  }, [])

  const paintCell = (e) => {
    if (e.target.tagName === 'TD') {
      e.target.style.backgroundColor = color;
      setMouseDown(true)
    }
  }

  return (
    <CanvasContainer>
      <GlobalTableStyle />
      <table
        id="pixel_canvas"
        style={{ backgroundColor: bgColor }}
        onMouseDown={ (e) => paintCell(e) }
        onMouseMove={
          isMouseDown ? (e) => {
            paintCell(e)
          } : null }
        onMouseUp={ () => setMouseDown(false) }
        onMouseLeave={ () => setMouseDown(false) }
        onTouchStart={ (e) => paintCell(e)}
        onTouchMove={
          isMouseDown ? (e) => {
            paintCell(e)
          } : null }
        onTouchEnd={ () => setMouseDown(false) }
        onDoubleClick={ (e) => { e.target.style.backgroundColor = '' }} />
    </CanvasContainer>
  )
}

export default Canvas
