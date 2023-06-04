import React from 'react';
import { useEffect } from 'react';


const App1 = () => {

const url = 'https://rickandmortyapi.com/api/character'

useEffect(() => {

async function fetchData (){
  const response =await fetch(url)
  const data =await response.json()
  console.log(data)
}
  fetchData()
}, []);


  return (
    <div>
      
    </div>
  );
}

export default App1;

/* 
https://www.youtube.com/watch?v=H1aNTRK3YfU
React, Rick and Morty REST API (con Vitejs y Github Pages)
min 10:57
 */