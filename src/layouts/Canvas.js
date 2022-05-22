import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalTableStyle = createGlobalStyle`
  table {
    border-spacing: 0;
    margin: 20px;
    border: 1px solid #282c34;
  }

  td, tr {
    width: 20px;
    height: 20px;
    border: 1px solid #282c34;
  }
`

const Container = styled.div`
  color: #000;
  margin: 0;
  font-size: calc(16px + 2vmin);
  width: 100%;
`

const Canvas = props => {
  const { bgColor } = props

  return (
    <Container>
    <GlobalTableStyle />
      <table
        id="pixel_canvas"
        style={{ backgroundColor: bgColor }}>
      </table>
    </Container>
  )
}

export default Canvas
