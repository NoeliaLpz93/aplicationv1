/*##########################
          Importaciones
############################*/
import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'


//Modulos
//Estilos
import './CardWidget.css'
//Componentes
//Core


/*##########################
          Logica
############################*/

//Funcion constructora
const CardWidget = (props) => {
    //Retorno que se va a renderizar
    return(
        <div className='cart-container'>
            <TiShoppingCart className='cart-icon'/> Cantidad Simulada: {props.cantidad}
        </div>
       
    )
    
}

/*##########################
          Exportacion
############################*/

export default CardWidget