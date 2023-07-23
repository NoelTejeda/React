import { useEffect, useState } from "react";

function App() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    /*  => esto se ejecuta siempre que se desmonta el componente y se ejecuta este 
     metodo para limpiar todo
     
       => y también se ejecuta cuadno cambian las dependencias, antes de ejecutar el efecto de nuevo
     */
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])


  const handleClick = () => {
    /*niega el valor booleano a true (!enable) */
    setEnable(!enable);
  };

  return (
    <main>
      {/* estilos para el redondo que seguirá el mouse */}
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`,
      }} />

      <button onClick={handleClick}>
        {enable ? "deshabilitar" : "habilitar"}
      </button>
    </main>
  );
}

export default App;
