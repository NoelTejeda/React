import "./App.css";
import { useState } from "react";

function App() {

const [dato, setDato] = useState();

function handleInput() {
  const local = localStorage.setItem('tarea: ',{setDato})
}
  
  return (
    <div className="App">
      <input type="text"  placeholder="coloque la nueva tarea" onChange={(e)=> setDato(e.target.value) } />

      <button onClick={handleInput}>Guardar Tarea</button>

    <input type="text" value={dato}/>


    </div>
  );
}

export default App;
