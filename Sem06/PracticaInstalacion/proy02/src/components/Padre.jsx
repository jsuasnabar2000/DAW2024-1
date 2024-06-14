import React from 'react'
import Hijo from './Hijo'
import estilos from '../css/esti.module.css'


const Padre = () => {
    let nombre="Jaime Suasnabar"
    let direccion="Lima 120"
    return (
        <div>
            <div className={estilos.clase1}>Componente Padre</div>
            <Hijo>Información a compartir</Hijo>
        </div>
    )
}

export default Padre