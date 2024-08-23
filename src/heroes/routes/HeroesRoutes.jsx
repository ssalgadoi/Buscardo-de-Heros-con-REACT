// Importamos los componentes y funciones necesarias desde "react-router-dom".
// `Route` se utiliza para definir rutas específicas dentro de la aplicación.
// `Routes` actúa como un contenedor para todas las rutas definidas.
// `Navigate` se usa para redirigir automáticamente a una ruta diferente cuando el usuario accede a una ruta desconocida.

import { Route, Routes, Navigate} from "react-router-dom";

// Importamos el componente `Navbar` desde la carpeta `ui`.
// `Navbar` es la barra de navegación que se muestra en la parte superior de la aplicación.
import { Navbar } from "../../ui";

// Importamos las páginas principales que se mostrarán según las rutas definidas.
// `MarvelPage`, `DcPage`, `SearchPage` y `HeroPage` son los componentes de las páginas correspondientes.
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";

// Definimos y exportamos un componente funcional llamado `HeroesRoutes`.
// Este componente se encarga de gestionar las rutas relacionadas con los héroes dentro de la aplicación.
export const HeroesRoutes = () => {
  return (
    <>
      {/* Mostramos la barra de navegación en la parte superior de todas las páginas de héroes. */}
      <Navbar/>

      {/* Contenedor principal para las páginas de contenido. */}
      <div className="container">
        {/* Definimos las rutas usando `Routes` y `Route`. */}
        <Routes>
          {/* Ruta para la página de héroes de Marvel */}
          <Route path="marvel" element={<MarvelPage />} />

          {/* Ruta para la página de héroes de DC */}
          <Route path="dc" element={<DcPage />} />

          {/* Ruta para la página de búsqueda de héroes */}
          <Route path="search" element={<SearchPage />} />

          {/* Ruta para la página de detalles de un héroe específico, identificada por el parámetro `id` en la URL */}
          <Route path="hero/:id" element={<HeroPage />} />

          {/* Redirigimos cualquier ruta desconocida o la raíz (`/`) a la página de Marvel */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
