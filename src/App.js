import React, { useState } from 'react'

import Header from './layouts/Header.js'
import Sidebar from './layouts/Sidebar.js'
import Canvas from './layouts/Canvas.js'
import { AppContainer, MainContainer } from './components/styled'

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
