import "./App.css";
import { useFetch } from "./useFetch";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  )
/*   const override para agregarle bordes, pero antes tomar en cuenta que no todos los spinners tienen bordes por ejemplo PopagateLoader 
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: 'red'
 }
 */
  return (
    <div className="App">
      <h1>Fetch Like a Pro</h1>
      <div className="card">
        <ul>
          {/* evaluea a true primeramente, sino hay nada, no muestra nada */}
          {/* {loading && <li>loading...</li> } */}
          {loading && (
            <li>
              <PropagateLoader
                color={"#d6d036"}
                loading={loading}
                /* cssOverride={override} */
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </li>
          )}
          {/* si existe data y si existe queremos que atrevez de map itere de usuarios y devuelva un elemento li */}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;

/* para agregar el loading:
 * https://www.npmjs.com/package/react-spinners
 * https://www.davidhu.io/react-spinners/storybook/?path=/docs/propagateloader--main 

pasos para configuracion:
  
  * npm install --save react-spinners
  * colocar el componente:
  *  <ClipLoader
        color={color} //sustituir la palabra por el color entre parentesis
        loading={loading}
        cssOverride={override} //borro si no quiero agregarle estilos
        size={150} /cambiar tamaño
        aria-label="Loading Spinner"
        data-testid="loader"
      />

  * import ClipLoader from "react-spinners/ClipLoader";
  * Listo!

la propiedad cssOverride={override} sirve para agregarle estilos al spinners ejemplo:
en este caso agrega un color rojo al borde del spinners
   const override = {
      borderColor: 'red'
   };

<ClipLoader cssOverride={override} />
 
*/
