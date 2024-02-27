const comentario = ({ sujeto }) => {
  return (
    <div>
      <p >{sujeto.nombre} </p>
      <p >{sujeto.apellido} </p>
    </div>
  );
}

export default comentario;
