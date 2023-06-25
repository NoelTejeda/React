import {useFetch} from './useFetch'
import "./App.css";

function App() {
 const {data}=useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div className="App">
      <h1>Fetch Like a Pro</h1>
      <div className="card">
      <ul>
        {/* si existe data y si existe queremos que atrevez de map itere de usuarios y devuelva un elemento li */}
        {data?.map((user)=>(<li key={user.id}>{user.name}</li>))}
      </ul>

      </div>
    </div>
  )
}

export default App;
