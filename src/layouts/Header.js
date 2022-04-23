import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  background-color: #3F51B5;
  color: #fff;
  margin: 0;
  height: 20vh;
  display: flex;
  justify-content: center;
  font-size: calc(18px + 2vmin);
  width: 100%;
  align-items: center;
`

const Header = () => {
  return <Title>Pixel Art Maker</Title>
}

export default Header
