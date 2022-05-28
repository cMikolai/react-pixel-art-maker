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
  const [color, setColor] = useState('#f44336')

   return (
     <AppContainer>

      {
        isOpen &&
        <Sidebar
          toggleOpen={ toggleOpen }
          isOpen={ isOpen}
          bgColor={ bgColor }
          setBgColor={ setBgColor }
          color={ color }
          setColor={ setColor } />
      }

       <MainContainer>
         <Header
            toggleOpen={ toggleOpen }
            isOpen={ isOpen } />
         <Canvas
            bgColor={ bgColor }
            color={ color } />
       </MainContainer>

     </AppContainer>
   )
 }

 export default App;
