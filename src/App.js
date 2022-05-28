import React, { useState } from 'react'

import Header from './layouts/Header.js'
import Sidebar from './layouts/Sidebar.js'
import Canvas from './layouts/Canvas.js'
import { AppContainer } from './components/styled'

const App = () => {
  const [isOpen, toggleOpen] = useState(true);
  const [bgColor, setBgColor] = useState('#fff')
  const [color, setColor] = useState('#f44336')

   return (
     <AppContainer display="flex">

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

       <AppContainer display="block">
         <Header
            toggleOpen={ toggleOpen }
            isOpen={ isOpen } />
         <Canvas
            bgColor={ bgColor }
            color={ color } />
       </AppContainer>

     </AppContainer>
   )
 }

 export default App;
