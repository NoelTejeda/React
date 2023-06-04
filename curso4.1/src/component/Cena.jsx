import React from 'react'

/* ojo entre llaves se coloca lo que se quiere recibir del componente padre
el destructuring se llama entre llaves*/
function Cena({nombre,color,precio,setTotal}) {
   
   const ruta ='http://www.html6.es/img/rey_'
   const imagen= `${ruta}${nombre.toLowerCase()}.png `

   const comprar=(elemento)=> {
    setTotal((e)=>e+precio)
    /*para que al darle click al botom desaparezca esa caja(rey)
     parentNode(padre)hasta llegar al padre principal y hacerle un display none, cuando se presione el boton comprar 
     "target es el elemento donde hago click"  */
    elemento.target.parentNode.parentNode.parentNode.style.display='none'
  } 
  
  return <>
  <div className='rey' style={{backgroundColor:color}} >
      <h1>{nombre} </h1>
      <img src={imagen} alt=""/>
    <div className='titulo'>Precio:</div>
    <div className='precio'>{precio} Bsf
        <div>
          <button onClick={comprar}>Comprar</button>
        </div>
    </div>
  </div>

</> 
 
}

export default Cena;

Cena.defaultProps={
  nombre:'vacio',
  color:'vacio',
  precio:'vacio'
} 


/* 
¿Qué es destructuring? 
https://medium.com/@insomniocode/destructuring-en-javascript-66b698b90691

La desestructuración (destructuring) es una forma de extraer valores de un array u objeto en distintas variables.

* una forma de hacerlo también es accediendo al valor usando props ejm:
prop.nombre

* averiguar sobre los spreads operator y parametros rest


 */