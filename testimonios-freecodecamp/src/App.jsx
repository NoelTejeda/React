import './App.css';
import { Testimonio } from './componentes/Testimonio';

export function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre sobre freeCodeCamp</h1>
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          imagen="Emma Bostian"
          testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eius nesciunt odit laboriosam minima id nobis unde maiores sequi saepe pariatur, culpa maxime consequuntur. Delectus obcaecati laborum rerum, aperiam perspiciatis, et ipsum sed deserunt facilis, illum officia. Tenetur, molestiae cupiditate!"
        />

        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          imagen="Shawn Wang"
          testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eius nesciunt odit laboriosam minima id nobis unde maiores sequi saepe pariatur, culpa maxime consequuntur. Delectus obcaecati laborum rerum, aperiam perspiciatis, et ipsum sed deserunt facilis, illum officia. Tenetur, molestiae cupiditate!"
        />

        <Testimonio
          nombre="Sara Chima"
          pais="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          imagen="Sara Chima"
          testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis eius nesciunt odit laboriosam minima id nobis unde maiores sequi saepe pariatur, culpa maxime consequuntur. Delectus obcaecati laborum rerum, aperiam perspiciatis, et ipsum sed deserunt facilis, illum officia. Tenetur, molestiae cupiditate!"
        />

      </div>
    </div>
  
    );
  
}

export default App;

