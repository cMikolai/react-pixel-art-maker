import React, { useState } from 'react'

import Header from './layouts/Header.js'
import Sidebar from './layouts/Sidebar.js'
import Canvas from './layouts/Canvas.js'
import { Container } from './components/styled'

const App = () => {
  const [isOpen, toggleOpen] = useState(true);
  const [bgColor, setBgColor] = useState('#fff')
  const [color, setColor] = useState('#f44336')

   return (
     <Container
      display="flex"
      height="100%">

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

       <Container
        display="block"
        height="100%">
         <Header
            toggleOpen={ toggleOpen }
            isOpen={ isOpen } />
         <Canvas
            bgColor={ bgColor }
            color={ color } />
       </Container>

     </Container>
   )
 }

 export default App;
