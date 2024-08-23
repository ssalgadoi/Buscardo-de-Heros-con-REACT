import { HeroCard } from '../components'; // Importa el componente HeroCard para mostrar cada héroe en la página de resultados.
import { useForm } from '../../hooks/useForm'; // Importa un hook personalizado para manejar formularios.
import { useLocation, useNavigate } from 'react-router-dom'; // Importa hooks de react-router-dom para manejar la ubicación y la navegación.
import queryString from 'query-string'; // Importa la librería query-string para parsear la query string de la URL.
import { getHeroesByName } from '../helpers'; // Importa una función helper que filtra héroes por nombre.

export const SearchPage = () => {

  // Hook para la navegación programática.
  const navigate = useNavigate();

  // Hook para obtener la ubicación actual (incluye la query string).
  const location = useLocation();

  // Obtiene el parámetro de búsqueda 'q' de la query string de la URL.
  const { q = '' } = queryString.parse(location.search);

  // Usa el hook personalizado useForm para manejar el estado del campo de búsqueda.
  const { searchText, onInputChange } = useForm({
    searchText: q // Valor inicial del campo de búsqueda.
  });

  // Filtra los héroes por el texto de búsqueda. Si no hay texto de búsqueda, retorna todos los héroes.
  const heroes = getHeroesByName(searchText);

  // Determina si se debe mostrar el mensaje de "Buscar Héroe" o el mensaje de error.
  const showSearch = (searchText.length === 0);
  const showError = (searchText.length > 0) && heroes.length === 0;

  // Función que maneja el evento de envío del formulario.
  const onSearchSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (evita el recargo de página).
    if (searchText.trim().length <= 1) return; // Si el texto de búsqueda es muy corto, no hace nada.

    // Navega a la misma página con el parámetro de búsqueda actualizado en la query string.
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Buscar Super Héroe</h1>
      <hr />
      <div className="row">
        {/* Columna para el formulario de búsqueda */}
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Buscar héroe"
              className="form-control" 
              name="searchText" 
              autoComplete="off"
              value={searchText} // El valor del campo de búsqueda se sincroniza con el estado del formulario.
              onChange={onInputChange} // Llama a la función onInputChange cada vez que el valor del campo cambia.
            />
            <button className="btn btn-warning mt-1">Buscar</button> {/* Botón para enviar el formulario. */}
          </form>
        </div>
        {/* Columna para mostrar los resultados de búsqueda */}
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
          {/* Muestra un mensaje si el campo de búsqueda está vacío */}
          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Buscar Héroe
          </div>
          {/* Muestra un mensaje si no hay héroes que coincidan con la búsqueda */}
          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            Ningún héroe con <b>{searchText}</b>
          </div>
          {/* Mapea sobre los héroes encontrados y los muestra usando el componente HeroCard */}
          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
