import React, { useState } from 'react'
import styled from 'styled-components'

import Header from './layouts/Header.js'
import Sidebar from './layouts/Sidebar.js'
import Canvas from './layouts/Canvas.js'

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`

const App = () => {
  const [isOpen, toggleOpen] = useState(true);
  const [bgColor, setBgColor] = useState('#fff')

   return (
     <AppContainer>

      {
        isOpen &&
        <Sidebar
          toggleOpen={ toggleOpen }
          isOpen={ isOpen}
          bgColor={ bgColor }
          setBgColor={ setBgColor } />
      }

       <MainContainer>
         <Header
          toggleOpen={ toggleOpen }
          isOpen={ isOpen } />
         <Canvas
          bgColor={ bgColor } />
       </MainContainer>

     </AppContainer>
   )
 }

 export default App;
