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
  font-size: calc(16px + 2vmin);
  width: 100%;
`

const Header = () => {
  return <Title>Header</Title>
}

export default Header
