import "./micss.css";
import img1 from "./img/rey_ataulfo.png";
import img2 from "./img/rey_ervigio.png";
import img3 from "./img/rey_incognito.png";

function App() {
  let nombre = ["rey_ataulfo", "rey_ervigio", "rey_incognito"];

  return (
    <div className="titulo">
      <h1>Curso de React Noel</h1>
      <div className="contenedor">

        <div className="caja">
          <img src={img1} alt="rey_ataulfo" />
          <div>{nombre[0]}</div>
        </div>

        <div className="caja">
          <img src={img2} alt="rey_ervigio" />
          <div>{nombre[1]}</div>
        </div>

        <div className="caja">
          <img src={img3} alt="rey_incognito" />
          <div>{nombre[2]}</div>
        </div>

      </div>
    </div>
  );
}

export default App;
