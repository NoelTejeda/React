import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";

/* fetch: para extraer los datos; es decir una petición
https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch */

/* No es buena idea colocar esta petición fuera del componente, es mejor colocarlo dentro de un useEffect, que es el hook
que nos permite manejar los efectos como una llamada de red, en caso una llamada a una api. 

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data=>{console.log(data)})
  .catch(err=>console.log('hay un error:', err)) 
  
*/

function App() {
  //colocamos la url en una constante:
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  /* 
  colocamos dentro de una constante el fetch con un nombre.
  si no coloco las x me sale el siguiente error en consola:
  TypeError: Window.fetch: At least 1 argument required, but only 0 passed
  ¿PORQUE PASA ESTO?
  min 20:36   del video: cómo consumir una API con React | Rick and Morty App
 */

  const fetchCharacters = (x) => {
    fetch(x)
      .then((response) => response.json())
      /*para guardar los datos obtenidos de data.results se hace de la siguiente manera:
      usando un estado
      .then(data=>{console.log(data.results)})
      ya que guardamos los datos en el estado characters podemos comprobarlo usando la developers tools
      entrar en App y se verá el hooks con los datos.
      */
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log("hay un error:", err));
  };

  const onAnterior = () => {
    fetchCharacters(info.prev);
  };
  const onSiguiente = () => {
    fetchCharacters(info.next);
  };

  //hacemos la petición controlada a traves de un useEffect
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar titulo="Rick And Morty App" />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onAnterior={onAnterior}
          onSiguiente={onSiguiente}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onAnterior={onAnterior}
          onSiguiente={onSiguiente}
        />
      </div>
    </>
  );
}

export default App;

/* para el uso de la api usaremos la arquitectura Rest */
