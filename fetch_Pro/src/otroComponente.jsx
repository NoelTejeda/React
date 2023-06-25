/* ejemplo reutilizando el custom hook useFetch */

import {useFetch} from './useFetch'
import "./App.css";

function App() {
  const {data} = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <div className="App">
      <h1>Fetch Like a Pro</h1>
      <div className="card">
        <ul>
          {data?.map((post) => (<li key={post.id}>{post.title}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default App;