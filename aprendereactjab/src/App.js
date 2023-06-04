import { useState } from 'react';
import {datos} from '../src/assets/datos'
import './App.css';

function App() {
  const [productos, setProductos]= useState (datos)
  const [misproductos, setMisProductos]= useState([])
  
  const comprar=(elID, elNombre)=>{
    setMisProductos([...misproductos, {
      producto:elNombre,
      estrella:1
    }])
  }

  return (
    <>
      <section>

        {productos.filter(x=>x.estado===false).map(y=>
          <div key={datos.id} onclick={()=>comprar(datos.id)} className="producto" >
            {y.producto}
          </div>)}

      </section>    
    </>
  );
}

export default App;


/* key={datos.id} 
https://www.youtube.com/watch?v=d6l8FbchHCE&t=36s
 La importancia de la propiedad “key” en React.js 
 
una key es un atributo especial string que debes incluir al crear listas de 
elementos. cada key DEBE ser único por lista.

Esto se hace con el fin de evitar el error:

Warning: Each child in a list should have a
 unique "key" prop



*/