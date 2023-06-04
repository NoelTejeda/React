import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import React, { useState } from "react";

function App() {
  // 3:40:00 del video
  const [numClics, setNumClics]= useState(0);


  const manejarClic=()=>{
    //console.log('Clic');
    setNumClics(numClics + 1);
  }
  
  const reiniciarContador=()=>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="logo-freeCodeCamp-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freeCodeCamp-logo"
          alt="logo freeCodeCamp"
        />
      </div>
      <div className="contenedor-del-contador">
       <Contador
       numClics={numClics}
       />
      <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
      <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />


      </div>
    </div>
  );
}

export default App;

/*  esta es una manera distinta de agregar imagenes sin la forma anterior que ese hizo en testimonio con required
al importar se le coloca un nombre que queramos identificarlo, se le dá la ruta, y luego en src se le coloca el nombre
que se le habia asiganado al importar. */
