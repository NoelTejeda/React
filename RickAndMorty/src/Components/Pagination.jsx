import React from "react";

const Pagination = ({prev, next, onAnterior, onSiguiente }) => {
  const handleAnterior = () => {
    onAnterior();
  };
  const handleSiguiente = () => {
    onSiguiente();
  };

  return (
    <div>
      <nav className="my-5" >
        <ul className="pagination justify-content-center">
          {/* ternaria para indicar si hay un prev muestre el boton siguiente, sino lo muestre vacio */}
          {prev ? (
            <li className="page-item">
              <button className="page-link" onClick={handleAnterior}>
                Anterior
              </button>
            </li>
          ) : null}

          {next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleSiguiente}>
                Siguiente
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
