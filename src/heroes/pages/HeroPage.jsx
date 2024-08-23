// Importamos las funciones y hooks necesarios de "react-router-dom" y "react".
// `Navigate` se usa para redirigir a una ruta diferente.
// `useNavigate` nos permite navegar programáticamente a diferentes rutas.
// `useParams` se usa para acceder a los parámetros de la URL.
// `useMemo` se usa para memorizar valores calculados y evitar cálculos innecesarios.
// `getHeroById` es una función helper que se utiliza para obtener la información de un héroe específico por su ID.
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from '../helpers';
import { useMemo } from "react";

// Este componente muestra la página de detalles de un héroe en función de su ID.
// Se extrae el ID del héroe desde la URL y se utiliza para obtener y mostrar su información.
export const HeroPage = () => {

  // Extrae el parámetro `id` de la URL utilizando el hook `useParams`.
  const { id } = useParams();

  // Utilizamos `useMemo` para memorizar el resultado de `getHeroById`.
  // `getHeroById` busca y devuelve los detalles del héroe cuyo ID coincide con el parámetro `id`.
  // Este cálculo solo se volverá a ejecutar si `id` cambia.
  const hero = useMemo(() => getHeroById(id), [id]);

  // `useNavigate` es un hook que permite la navegación programática.
  // Se usa para dirigir al usuario a diferentes rutas dentro de la aplicación.
  const navigate = useNavigate();

  // Definimos la función `onNavigateBack`, que se ejecuta cuando el usuario quiere volver a la página anterior.
  // `navigate(-1)` indica al navegador que retroceda una página en el historial.
  const onNavigateBack = () => {
    navigate(-1);
  };

  // Si no se encuentra un héroe con el ID proporcionado (es decir, si `hero` es `null` o `undefined`),
  // redirigimos al usuario a la página de Marvel mediante el componente `Navigate`.
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  // Retornamos el JSX que renderiza la página de detalles del héroe.
  return (
    <>
      <div className="row mt-5 animate__animated animate__fadeInLeft">
        {/* Columna izquierda que muestra la imagen del héroe */}
        <div className="col-4">
          <img 
            src={`/assets/heroes/${id}.jpg`} // Ruta de la imagen del héroe en la carpeta `assets/heroes`
            alt={hero.alter_ego} // Texto alternativo para la imagen, importante para la accesibilidad
            className="img-thumbnail " // Clase de Bootstrap que estiliza la imagen, añadiendo bordes y reduciendo su tamaño
          />
        </div>

        {/* Columna derecha que muestra los detalles del héroe */}
        <div className="col-8">
          <h3>{hero.superhero}</h3> {/* Título que muestra el nombre del superhéroe */}
          <ul className="list-group list-group-flush">
            {/* Lista de detalles del héroe, incluyendo su alter ego, editor (publisher) y primera aparición */}
            <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
            <li className="list-group-item"><b>Publicado: </b>{hero.publisher}</li>
            <li className="list-group-item"><b>Primera presentación: </b>{hero.first_appearance}</li>
          </ul>
          <h5 className="mt-3">Personajes</h5> {/* Subtítulo que introduce la lista de personajes */}
          <p>{hero.characters}</p> {/* Muestra los personajes relacionados con el héroe */}

          {/* Botón que permite al usuario regresar a la página anterior */}
          <button 
            className="btn btn-warning" // Clase de Bootstrap que da estilo al botón, haciéndolo amarillo (warning)
            onClick={onNavigateBack} // Asocia la función `onNavigateBack` al evento de clic en el botón
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};
