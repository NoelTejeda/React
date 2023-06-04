import React from 'react'

//usando destructuring
function MiComponente({rey}) {
  return (
    <div>
      <h1>Hola soy el Rey {rey.nombre} y estoy comiendo {rey.come} </h1>
    </div>
  )
}


//default props video4
MiComponente.defaultProps={
  rey:"vacio",
  come:"vacio"
}
/* function MiComponente(props) {
  console.log(props)
  return (
    <div>
      <h1>Hola soy el Rey {props.rey} y estoy comiendo {props.come} </h1>
    </div>
  )
}
 */
export default MiComponente

/* 
props= si se quiere enviar una props por defecto se puede inicializar: function MiComponente(come:"pan") y ahora el valor de come será fijo cada vez que se llame.

No siempre se pueden usar las props de la siguiente manera:
      <h1>Hola soy el Rey {props.rey} y estoy comiendo {props.come} </h1>
      
ya que se puede usar los "desestructuring" de la siguiente manera "entre llaves":
      
      function MiComponente({rey, come})
      
y ahora puedo hacer uso de el de la siguiente manera:
      
      <h1>Hola soy el Rey {rey} y estoy comiendo {come} </h1>
 */


/* 
      Cómo usar las default props?
se usan las default props para colocar datos por defecto en caso de que no se le envien datos(componente padre al hijo) y se hace de la siguiente manera:

MiComponente.defaultProps={
  rey:"vacio",
  reses:"vacio"
}


 */