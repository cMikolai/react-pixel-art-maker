import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalTableStyle = createGlobalStyle`
  table {
    border-spacing: 0;
    margin: 20px;
    border: 1px solid #282c34;
  }

  td {
    width: 20px;
    height: 20px;
    padding: 0;
    border: 1px solid #282c34;
  }
`

const Container = styled.div`
  color: #000;
  margin: 0;
  font-size: calc(16px + 2vmin);
  width: 100%;
`

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
    <Container>
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
    </Container>
  )
}

export default Canvas
