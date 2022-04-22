import React from 'react';
import '../hoja-de-estilos/BotonClear.css';

//Componente funcional con función flecha

const BotonClear = (props) => (

  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);


export default BotonClear;