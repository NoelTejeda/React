import "./App.css";
import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState();

  const pasar = () => {
    setContador(contador + 1);

    if (contador+1>reyesGodos.length) {
      setContador(0);
    }

    setMensaje(
      <h2>
        La afición principal de{" "}
        <span className="rojo">{reyesGodos[contador].nombre}</span>
        <span className="verde">{reyesGodos[contador].aficion}</span>{" "}
      </h2>
    );
  };

  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: " comer toros sin pelar",
    },
    {
      nombre: "recesvinto",
      aficion: " leer a Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: " la cria del escarabajo en almibar",
    },
  ];

  return (
    <>
      <button onClick={pasar}>Ver siguiente</button>
      <div>{mensaje}</div>
    </>
  );
};

export default App;
