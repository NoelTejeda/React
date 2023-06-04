import React from "react";
import  "../Style/Contador.css"

// desestructuración:numClics
function Contador({ numClics }) {
  return (
    <div className="contador">
     {numClics}
    </div>);
}

export default Contador;
