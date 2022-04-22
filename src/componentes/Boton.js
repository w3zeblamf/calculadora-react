import React from 'react';
import '../hoja-de-estilos/Boton.css';

//Componente funcional

function Boton(props) {

  const esOperador = valor => {
  
    return isNaN(valor) && (valor !== '.') && (valor !== '=');};
     //Si el valor no es un numero, un punto o el signo '=', entonces se considera un operador, se retorna el valor 'true'. Si cualquiera de estos criterios es falso se retorna el valor 'false'.

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}

export default Boton;