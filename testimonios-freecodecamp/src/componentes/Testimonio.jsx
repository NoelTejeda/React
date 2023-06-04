// importamos react del paquete react
import React from "react";
import "../style/Testimonio.css";

//componente funcional
export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        // src={require(`../imagenes/Emma Bostian.png`)}
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Emma Bostian"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          {" "}
          <strong>{props.nombre}</strong> en {props.pais}{" "}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en {props.empresa}{" "}
        </p>
        <p className="texto-testimonio">"{props.testimonio} "</p>
      </div>
    </div>
  );
}

//export default Testimonio;

//ver en notas la diferencia entre las exportaciones e importaciones nombradas y por defecto linea 257-282

/* dentro de los paréntesis del return describimos con JSX la estructura del componente */

/* para incluir una IMAGEN no basta con src y la ruta, en react, es necesario colocarlo entre llaves y agregar REQUIRE ó también se puede realizar mediante una importación (import)*/

// -----------------------------------
/*
uso de 
<React.Fragment> .... </React.Fragment>
otra manera de usarlo es:
<>...</>    
 
esto lo que hace es retornar o envolver multiples elementos, sin necesidad de crear uno nuevo dentro del Dom.

ejemplo: si uso un div. y luego debajo uso otro elemento <p></p>
esto me representaria un error al compilar: SyntaxError
y hay dos maneras de solucionarlo:

1.- envolviendo todos los elementos dentro de un div.
  esta solución no es recomendable ya que generariamos un div extra cada vez que queramos retornar algún elemento.

2.- envolviendo todos los elementos dentro de un fragment.
  esta es la opción que sugiere react. ya que no afectaria en la estructura jerarquica del Dom.

*/
