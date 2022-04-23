import React from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import styled, { createGlobalStyle } from 'styled-components'

import Header from './layouts/Header.js'
import Sidebar from './layouts/Sidebar.js'
import Canvas from './layouts/Canvas.js'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const App = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GlobalStyle />
    <App>
      <Sidebar />
      <Container>
        <Header />
        <Canvas />
      </Container>
    </App>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
