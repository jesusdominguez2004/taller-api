import React from 'react'
import { useState } from 'react'

const StarWars = () => {
    // Variables hooks
    const [personajes, setPersonajes] = useState([]);
    const [planetas, setPlanetas] = useState([]);
    const [peliculas, setPeliculas] = useState([]);
    const [naves, setNaves] = useState([]);
    const [paginacionPersonajes, setPaginacionPersonajes] = useState(0);
    const [paginacionPlanetas, setPaginacionPlanetas] = useState(0);
    const [paginacionPeliculas, setPaginacionPeliculas] = useState(0);
    const [paginacionNaves, setPaginacionNaves] = useState(0);

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

    const traerPlanetas = async (next) => {
        try {
            const solicitud = await fetch(`https://swapi.dev/api/planets/?page=${next}`);
            const { results } = await solicitud.json();
            const planetasConImagenes = results.map((x) => ({
                ...x,
                image: `https://starwars-visualguide.com/assets/img/planets/${getIdFromUrl(x.url)}.jpg`,
            }));
            setPlanetas(planetasConImagenes);
            console.log(planetasConImagenes);
        } catch (error) {
            console.log(error);
        }
    }

    const traerPeliculas = async (next) => {
        try {
            const solicitud = await fetch(`https://swapi.dev/api/films/?page=${next}`);
            const { results } = await solicitud.json();
            const peliculasConImagenes = results.map((x) => ({
                ...x,
                image: `https://starwars-visualguide.com/assets/img/films/${getIdFromUrl(x.url)}.jpg`,
            }));
            setPeliculas(peliculasConImagenes);
            console.log(peliculasConImagenes);
        } catch (error) {
            console.log(error);
        }
    }

    const traerNaves = async (next) => {
        try {
            const solicitud = await fetch(`https://swapi.dev/api/starships/?page=${next}`);
            const { results } = await solicitud.json();
            const navesConImagenes = results.map((x) => ({
                ...x,
                image: `https://starwars-visualguide.com/assets/img/starships/${getIdFromUrl(x.url)}.jpg`,
            }));
            setNaves(navesConImagenes);
            console.log(navesConImagenes);
        } catch (error) {
            console.log(error);
        }
    }

    const getIdFromUrl = (url) => {
        const urlList = url.split('/');
        return urlList[urlList.length - 2]
    } 

    // Funciones botones PERSONAJES
    const traerPersonajesAux = () => {
        setPaginacionPersonajes(paginacionPersonajes + 1);
        traerPersonajes(paginacionPersonajes + 1);
    }

    const siguientePersonajes = () => {
        setPaginacionPersonajes(paginacionPersonajes + 1);
        traerPersonajes(paginacionPersonajes + 1);
    }

    const atrasPersonajes = () => {
        if (paginacionPersonajes > 1) {
            setPaginacionPersonajes(paginacionPersonajes - 1);
            traerPersonajes(paginacionPersonajes - 1);
        }
    }
    
    // Funciones botones PLANETAS
    const traerPlanetasAux = () => {
        setPaginacionPlanetas(paginacionPlanetas + 1);
        traerPlanetas(paginacionPlanetas + 1);
    }

    const siguientePlanetas = () => {
        setPaginacionPlanetas(paginacionPlanetas + 1);
        traerPlanetas(paginacionPlanetas + 1);
    }

    const atrasPlanetas = () => {
        if (paginacionPlanetas > 1) {
            setPaginacionPlanetas(paginacionPlanetas - 1);
            traerPlanetas(paginacionPlanetas - 1);
        }
    }

    // Funciones botones PELICULAS
    const traerPeliculasAux = () => {
        setPaginacionPeliculas(paginacionPeliculas + 1);
        traerPeliculas(paginacionPeliculas + 1);
    }

    const siguientePeliculas = () => {
        setPaginacionPeliculas(paginacionPeliculas + 1);
        traerPeliculas(paginacionPeliculas + 1);
    }

    const atrasPeliculas = () => {
        if (paginacionPeliculas > 1) {
            setPaginacionPeliculas(paginacionPeliculas - 1);
            traerPeliculas(paginacionPeliculas - 1);
        }
    }

    // Funciones botones NAVES
    const traerNavesAux = () => {
        setPaginacionNaves(paginacionNaves + 1);
        traerNaves(paginacionNaves + 1);
    }

    const siguienteNaves = () => {
        setPaginacionNaves(paginacionNaves + 1);
        traerNaves(paginacionNaves + 1);
    }

    const atrasNaves = () => {
        if (paginacionNaves > 1) {
            setPaginacionNaves(paginacionNaves - 1);
            traerNaves(paginacionNaves - 1);
        }
    }

    // HTML retornado
    return (
        <div>
            <h1>Solicitud API Star Wars®</h1>
            <h2>Buenas Prácticas de Desarrollo de Software</h2>
            <h2>© Jesús Domínguez</h2>
            <hr />
            <p>NOTA: Todos los personajes tienen imagen.</p>
            <button onClick={traerPersonajesAux}>Personajes</button>
            <button onClick={siguientePersonajes}>Siguiente</button>
            <button onClick={atrasPersonajes}>Atrás</button>
            {
                personajes.map(({name, image}) => (
                    <div key={name}>
                        <h3>NOMBRE: {name}</h3>
                        <img src={image} alt={name} />
                    </div>
                ))
            }
            <hr />
            <p>NOTA: Hay planetas que no tiene imagen.</p>
            <button onClick={traerPlanetasAux}>Planetas</button>
            <button onClick={siguientePlanetas}>Siguiente</button>
            <button onClick={atrasPlanetas}>Atrás</button>
            {
                planetas.map(({name, image}) => (
                    <div key={name}>
                        <h3>NOMBRE: {name}</h3>
                        <img src={image} alt={name} />
                    </div>
                ))
            }
            <hr />
            <p>NOTA: Solo hay seis pelícuas. No hay paginado.</p>
            <button onClick={traerPeliculasAux}>Peliculas</button>
            <button onClick={siguientePeliculas}>Siguiente</button>
            <button onClick={atrasPeliculas}>Atrás</button>
            {
                peliculas.map(({title, director, release_date, image}) => (
                    <div key={title}>
                        <h3>NOMBRE: {title}</h3>
                        <h3>DIRECTOR: {director}</h3>
                        <h3>FECHA ESTRENO: {release_date}</h3>
                        <img src={image} alt={title} />
                    </div>
                ))
            }
            <hr />
            <p>NOTA: Hay naves que no tienen imagen.</p>
            <button onClick={traerNavesAux}>Naves</button>
            <button onClick={siguienteNaves}>Siguiente</button>
            <button onClick={atrasNaves}>Atrás</button>
            {
                naves.map(({name, image}) => (
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