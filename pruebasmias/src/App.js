import React from 'react'
import { Boton2 } from './components/Boton2'
//import Boton1 from './components/Boton1'
import Boton1 from './components/Boton1'
import Comentario from './components/Comentario'

function App() {

  const sujeto = {
    nombre: 'Noel',
    apellido: 'Tejeda',
    edad: 40
  }

  return (
    <div>
      <h1>hola mundo</h1>
      <Boton2 mensaje2='dale click' />
      <Boton1 mensaje1='otro click' />
      <Comentario sujeto={sujeto} />

    </div>
  )
}

export default App
