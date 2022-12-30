/*##########################
          Importaciones
############################*/
import React from 'react'
//Modulos
//Estilos
import './ItemListContainer.css'
//Componentes
//Core


/*##########################
          Logica
############################*/

//Funcion constructora
const ItemListContainer = (props) => {
    //Retorno que se va a renderizar
    return(
        <div className='greeting'>
            Aqui va el ItemListContainer: {props.greeting}
        </div>
    )
    
}

/*##########################
          Exportacion
############################*/

export default ItemListContainer