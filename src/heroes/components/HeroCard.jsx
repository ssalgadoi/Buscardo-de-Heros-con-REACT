// Importamos el componente `Link` desde `react-router-dom`.
// `Link` se usa para crear enlaces que permiten navegar entre diferentes rutas dentro de una aplicación React sin recargar la página.
import { Link } from "react-router-dom";

// Definimos un componente funcional llamado `CharactersByHero`.
// Este componente recibe `alter_ego` y `characters` como props (propiedades).
// Verifica si `alter_ego` es igual a `characters`. Si son iguales, no renderiza nada.
// Si son diferentes, muestra un párrafo con el valor de `characters`.
const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters)
        return (<></>); // Si son iguales, no se muestra nada.
    return <p>{characters}</p>; // Si son diferentes, se muestra el contenido de `characters` en un párrafo.
}

// Exportamos el componente `HeroCard` como un componente funcional.
// Este componente recibe varias props que representan información sobre un héroe: 
// `id`, `superhero`, `publisher`, `alter_ego`, `first_appearance`, y `characters`.
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // Definimos una constante `heroImageUrl` que construye la URL de la imagen del héroe.
    // Se asume que las imágenes están almacenadas en una carpeta `assets/heroes/` con el `id` del héroe seguido de `.jpg`.
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    // El componente devuelve un JSX que define la estructura y el contenido de una tarjeta (`card`) de héroe.
    // Esta tarjeta contiene la imagen del héroe, su nombre, su alter ego, sus personajes y su primera aparición en cómics.
    // También incluye un enlace que lleva a una página con más detalles sobre el héroe.
    return (
        <div className="col animate__animated animate__fadeIn">
            {/* Contenedor de la tarjeta */}
            <div className="card">
                {/* Columna que contiene la imagen del héroe */}
                <div className="col-4">
                    {/* Imagen del héroe */}
                    <img src={heroImageUrl} alt={superhero} className="card-img" />
                </div>
                {/* Columna que contiene el resto de la información del héroe */}
                <div className="col-8">
                    {/* Cuerpo de la tarjeta */}
                    <div className="card-body"></div>
                    {/* Título que muestra el nombre del superhéroe */}
                    <h5 className="card-title">{superhero}</h5>
                    {/* Texto que muestra el alter ego del héroe */}
                    <p className="card-text">{alter_ego}</p>
                    {/* Se renderiza el componente `CharactersByHero` si el alter ego es diferente a los personajes */}
                    <CharactersByHero characters={characters} alter_ego={alter_ego} />
                    {/* Texto que muestra la primera aparición del héroe */}
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    {/* Enlace que lleva a más detalles del héroe */}
                    <Link to={`/hero/${id}`}>
                        Mas..
                    </Link>
                </div>
            </div>
        </div>
    )
}
