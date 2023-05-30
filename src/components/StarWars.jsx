import React from 'react'
import { useState } from 'react'

const StarWars = () => {
    // Variables hooks
    const [personajes, setPersonajes] = useState([]);
    const [paginacion, setPaginacion] = useState(0);

    // Funciones
    const traer = () => {
        setPaginacion(paginacion + 1);
    }

    const siguiente = () => {
        setPaginacion(paginacion + 1);
    }

    const atras = () => {
        setPaginacion(paginacion - 1);
    }

    return (
        <div>
            <h1>Solicitud API Star Wars®</h1>
            <h2>Buenas Prácticas de Desarrollo de Software</h2>
            <h2>© Jesús Domínguez</h2>
            <button onClick={traer}>Personajes</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}>Atrás</button>
        </div>
    )
}

export default StarWars