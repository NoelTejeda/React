import './App.css'
import { useFetch } from './useFetch'
import PropagateLoader
from "react-spinners/PropagateLoader";

function App() {
  const {data, loading}=useFetch('https://jsonplaceholder.typicode.com/users')
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
      color={'#36d7b7'}
      loading={loading}
      
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </li>
)}
         {/* si existe data y si existe queremos que atrevez de map itere de usuarios y devuelva un elemento li */}
         {data?.map((user)=>(<li key={user.id}>{user.name}</li>))}
       </ul>
 
       </div>
     </div>
   )
 }

export default App


/* para agregar el loading:
* https://www.npmjs.com/package/react-spinners
* https://www.davidhu.io/react-spinners/storybook/?path=/docs/propagateloader--main */