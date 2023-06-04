import React from 'react';

const Characters = ({characters = []}) => {
  return (
    <div className="row">
      {
         characters.map((item, index) =>(
          <div key={index} className="col mb-4">
            <div className='card shadow p-3 mb-5 bg-body-tertiary rounded' style={{minwidth: '200px'}}>
              <img src={item.image} alt=""/>
              <div className='card-body' >
                <h5 className='card-title fw-bold'>{item.name} </h5>
                <hr/>
                <p>Número:{item.id} </p>
                <p>location:{item.location.name} </p>
                <p>Specie:{item.species} </p>
                <p>Origin:{item.origin.name} </p>
              </div>
            </div>
          </div>
         ))
      }
    </div>


  );
}

export default Characters;
