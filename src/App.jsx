
import '../src/App.css'
// eslint-disable-next-line no-unused-vars
import React from "react";
import Testimonio from './Components/testimonio'
import Tarjetas from './Components/tarjetas'
import '../src/styles/testimonio.css'
import '../src/styles/tarjetas.css'

function App(){
  return(
    <div className='App'>
      
      <div className='container'>
         <Tarjetas
         imagen='AA72'
         name='AA72'
         numero='01'
         color='blue'
         tipo='Agua'
         arma='Rango'
         />
         <Tarjetas
         imagen='aisha'
         name='Aisha'
         numero='02'
         color='Orange'
         tipo='Luz'
         arma='Melee'
         />

         
      </div>
    </div>
    
  )
}
export default App
