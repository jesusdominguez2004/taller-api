import React from 'react'
import { useState } from 'react'

const StarWars = () => {
    // Variables hooks
    const [personajes, setPersonajes] = useState([]);
    const [paginacion, setPaginacion] = useState(0);

    // Funciones API
    const traerPersonajes = async (next) => {
        try {
            const solicitud = await fetch(`https://swapi.dev/api/people/?page=${next}`);
            const { results } = await solicitud.json();
            const pesonajesConImagenes = results.map((x) => ({
                ...x,
                image: `https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(x.url)}.jpg`,
            }));
            setPersonajes(pesonajesConImagenes);
            console.log(pesonajesConImagenes);
        } catch (error) {
            console.log(error);
        }
    }

    const getIdFromUrl = (url) => {
        const urlList = url.split('/');
        return urlList[urlList.length - 2]
    }    

    // Funciones botones
    const traer = () => {
        setPaginacion(paginacion + 1);
        traerPersonajes(paginacion + 1);
    }

    const siguiente = () => {
        setPaginacion(paginacion + 1);
        traerPersonajes(paginacion + 1);
    }

    const atras = () => {
        if (paginacion > 1) {
            setPaginacion(paginacion - 1);
            traerPersonajes(paginacion - 1);
        }
    }

    // HTML retornado
    return (
        <div>
            <h1>Solicitud API Star Wars®</h1>
            <h2>Buenas Prácticas de Desarrollo de Software</h2>
            <h2>© Jesús Domínguez</h2>
            <button onClick={traer}>Personajes</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}>Atrás</button>
            {
                personajes.map(({name, image}) => (
                    <div key={name}>
                        <h3>NOMBRE: {name}</h3>
                        <img src={image} alt={name} />
                    </div>
                ))
            }
        </div>
    )
}

export default StarWars