import React from "react";
import  "../Style/Boton.css";

// usando desestructuración {texto}
function Boton({texto, esBotonDeClic, manejarClic}) {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>);
}

export default Boton;
// hay que exportar el boton si queremos importarlo.



/* 
3:00:00 del curso aprede React desde cero.

el className vá a estar condicionado por el tipo de Boton, ya
que se van a usar dos (reiniciar y click), para esto se 
usará un operador ternario
o un if-else.


esBotonDeClic vá a ser verdadero o falso. y dependiendo de su valor vamos a asignar una clase especifica.


eventlistener = onClick
 */