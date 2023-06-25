/* a esto se le conoce como un custom hooks (hook personalizado):
es una función que puedes crear para reutilizar la lógica de estado y del ciclo de vida de un componente en múltiples componentes de React.
Los custom hooks te permiten extraer la lógica de un componente en una función reutilizable para que puedas compartir esa lógica entre varios 
componentes.

Un custom hook es una función JavaScript cuyo nombre comienza con “use” */

import { useState, useEffect } from "react";

export function useFetch(url){
const [data, setData] = useState(null);

useEffect(() => {
  /* fetch('https://jsonplaceholder.typicode.com/users') */
   fetch(url) 
  .then((Response)=>Response.json())
  .then((data)=>setData(data))

},[])
/* se coloca un corchete vacio para indicar que se renderize una vez, pero tomar en cuenta que se puede transformar a un array de dependencias*/

return {data};
}