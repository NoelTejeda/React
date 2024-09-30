import "./App.css"
import MiComponente from "./Component/MiComponente"

function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      {/* en caso de enviar un objeto al componente hijo se realiza de la siguinte  */}
      <MiComponente rey={{
        nombre: "Noel",
        come: " pepito"
      }} />

      <MiComponente rey={{
        nombre: "Marianyela",
        come: " zanahorias"
      }} />

      <MiComponente rey={{
        nombre: "Anyela",
        come: " Cambur"
      }} />

      <h3>

      </h3>
    </>
  )
}

export default App;
/* 
* el componente padre (App)tiene que importar a los componentes hijos (MiComponente)


* en caso de enviar solo datos al componente hijo se realiza de la siguinte

<MiComponente rey="Noel" come="pepito"/>
<MiComponente rey="Marianyela" come="zanahorias"/>
<MiComponente rey="Anyela" come="Cambur"/> 

---------------------------------------------------------------

* en caso de enviar un array al componente hijo se realiza de la siguinte  *
<MiComponente rey={["Noel" ," pepito"]}/>
    <MiComponente rey={["Marianyela"," zanahorias"]}/>
    <MiComponente rey={["Anyela"," Cambur"]}/> 
    
    y en el hijo(MiComponente) se llamaria de la siguiente manera:
     <div>
      <h1>Hola soy el Rey {rey[0]} y estoy comiendo {rey[1]} </h1>
    </div>
    
    ---------------------------------------------------------------
    * en caso de enviar un objeto al componente hijo se realiza de la siguinte  
    <MiComponente rey={{nombre:"Noel",
    come:" pepito"}}/>

    <MiComponente rey={{nombre:"Marianyela",
                       come:" zanahorias"}}/>

    <MiComponente rey={{nombre:"Anyela",
                       come:" Cambur"}}/> 

    y en el hijo(MiComponente) se llamaria de la siguiente manera:
    <div>
      <h1>Hola soy el Rey {rey.nombre} y estoy comiendo {rey.come} </h1>
    </div>

    es importante cerrar entre corchetes el props en el componente hijo ejemplo:
    function MiComponente({rey})
*/