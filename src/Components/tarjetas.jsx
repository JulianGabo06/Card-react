import React from 'react';

function Tarjetas(props){
  return (
    <div className="card borderRa">
      <div className="number borderRa">
        {props.numero}
        <img src={"src/Images/GT/"+props.imagen+".webp"} alt={props.imagen} className="imagen" />
      </div>
      <div className="containerInfo">
        <h5>
          <p id='info'>{props.name}</p>
          <span id='info' >{props.numero}</span>
        </h5>
        <div className="centrar">
          <p style={{ marginRight: '0.5pc' }} id='info'>Tipo</p>
          <p id='info' className="border" style={{ background: props.color }}>{props.tipo}</p>
        </div>
        <div className="centrar">
          <p>Arma:</p>
          <p>{props.arma}</p>
        </div>
      </div>
    </div>
  );
}

export default Tarjetas;
