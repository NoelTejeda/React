import "./App.css";
import { useState } from "react";

const App = () => {
  const cambios = [
    {
      moneda: "Dolar",
      cambio: 1,
    },
    {
      moneda: "Bolivares",
      cambio: 15.13,
    },
    {
      moneda: "Peso colombiano",
      cambio: 4543.5,
    },
    {
      moneda: "Peso mexicano",
      cambio: 23.2,
    },
    {
      moneda: "Peso argentino",
      cambio: 118.6,
    },
  ];
  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);
  const [resultado4, setResultado4] = useState(0);

  const modificar = (e) => {
    setCantidad(e.target.value);
    /* setResultado1(cantidad*cambios[1].cambio)  así estaba bien, pero  no multiplicaba enseguida ver video 3 min 51:54*/
    setResultado1(e.target.value * cambios[1].cambio);
    setResultado4(e.target.value * cambios[2].cambio);
    setResultado3(e.target.value * cambios[3].cambio);
    setResultado2(e.target.value * cambios[4].cambio);
  };

  return (
    <>
      <label htmlFor="u0">{cambios[0].moneda}</label>
      <input id="u0" type="number" value={cantidad} onChange={modificar} />

      <label htmlFor="u1">{cambios[1].moneda}</label>
      <input
        id="u1"
        type="number"
        value={resultado1}
        onChange={modificar}
        readOnly
      />

      <label htmlFor="u2">{cambios[2].moneda}</label>
      <input
        id="u2"
        type="number"
        value={resultado2}
        onChange={modificar}
        readOnly
      />

      <label htmlFor="u3">{cambios[3].moneda}</label>
      <input
        id="u3"
        type="number"
        value={resultado3}
        onChange={modificar}
        readOnly
      />

      <label htmlFor="u4">{cambios[4].moneda}</label>
      <input
        id="u4"
        type="number"
        value={resultado4}
        onChange={modificar}
        readOnly
      />
    </>
  );
};

export default App;

/* htmlFor enlaza cada etiqueta con su input */
