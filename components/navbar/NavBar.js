/*##########################
          Importaciones
############################*/
import React from 'react'
//Modulos
//Estilos
import './NavBar.css'

//Componentes

import CardWidget from '../cardWidget/CardWidget.js'

//Core


/*##########################
          Logica
############################*/

//Funcion constructora
const NavBar = () => {
    
    //Retorno que se va a renderizar
    return(
        <header className='navbar'>
        <h1 className='title'>LuxurySport</h1>
        <ul className='links'>
          <li><a href="index.html">Ofertas</a></li>
          <li><a href="index.html">Proximos Lanzamientos</a></li>
          <li><a href="index.html">Temporada</a></li>
          <li><a href="index.html">Quienes Somos</a></li>
        </ul>
        <CardWidget cantidad="14"/>
        
      </header>
    )
    
}


/*##########################
          Exportacion
############################*/

export default NavBar