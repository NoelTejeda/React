import "./App.css";
import img1 from "./img/rey_teodorico.png";
import img2 from "./img/rey_ataulfo.png";
import { useRef } from "react";

//Sin usar variables

function App() {
  const cambio = 23.16;
  const refCaja = useRef();

  const incrementar = (e) => {
    //se transforma a Number y luego se le suma 1
    //e.target.innerHTML es lo que hay escrito dentro de la caja
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    //console.log(e)

    if (e.target.innerHTML > 10){
      e.target.innerHTML=1;
    }if(e.target.innerHTML>=8){
      e.target.style.backgroundColor='red';
    }else{
      e.target.style.backgroundColor='white';
    }
}

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio
  };

  //cambia imagenes si en el nombre incluye tal...
  const cambiar = (e) =>{
    if(e.target.src.includes('teodorico')){
      e.target.src=img2
    }else{
      e.target.src=img1
    }
  }

  const agregar = (e) => {
    refCaja.current.innerHTML=e.target.value
    //el value identifica lo que hay dentro del input
  }

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1{" "}</div>
      <button type="submit" onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambiar} src={img1} alt="ataulfo" />
      </div>

      <input className="campo" onChange={agregar}/>
    </>
  );
}

export default App;

// innerHTML es usado para introducir texto en una página web. Esto añade un riesgo de seguridad
