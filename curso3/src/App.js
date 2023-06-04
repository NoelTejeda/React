import React, { Fragment, useState } from "react";
import "./App.css"

const App = () => {
  const [contador, setContador] = useState(0);
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();

  const aumentar = () => {setContador(contador+1)}
  const disminuir = () => {setContador(contador-1)};
  const reestablecer = () => {setContador(0)};

  const sumar=()=>{
    setResultado(Number(numero1)+Number(numero2))
  }

  const copiar1=(e)=>{
    setNumero1(e.target.value);
  }
  
  const copiar2=(e)=>{
    setNumero2(e.target.value);
  }

  return (
    <Fragment>
    <h1>---------Aumentar y Disminuir----------------</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={reestablecer}>Reestablecer</button>
      <h1>{contador}</h1>
    <h1>---------suma con dos input----------------</h1>

    <div class='caja'>
      <input type="number" value={numero1} onChange={copiar1} /> + 
      <input type="number" value={numero2} onChange={copiar2} /> =
      <input type="number"  value={resultado} readOnly/>
      <button class='button' onClick={sumar}>Sumar</button>
    </div>

    <h1>---------Cambios de Estado----------------</h1>





    </Fragment>
  );
};

export default App;

/* 
readOnly es para que solo sea lectura y no se pueda colocar nada dentro del input 

cuando se usa useState, podemos darle un valor inicial entre parentesis ejemplo: useState(0)

const [contador, setContador] 
contador= es la variable
setContador= es la función que se encarga de modificar la variable




*/

