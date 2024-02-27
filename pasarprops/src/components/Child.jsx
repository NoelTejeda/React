/* const Child = (m) => {
  console.log('Noel',m)
  return (
    <div>
    {m.message}
    {m.message1} 
    </div>
  )
}

export default Child */

//con desestructuring
const Child = ({ message, message1 }) => {
  //console.log('Noel',m)
  return (
    <div>
      {message}
      {message1}
    </div>
  )
}

export default Child
