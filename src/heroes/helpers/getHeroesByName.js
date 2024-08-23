import { heroes } from "../data/heroes"; // Importa la lista de héroes desde un archivo de datos.

export const getHeroesByName = (name = '') => {
    name = name.toLocaleLowerCase().trim(); // Convierte el nombre a minúsculas y elimina espacios al inicio y al final.

    if (name.length === 0) return []; // Si el nombre está vacío, retorna una lista vacía.

    // Filtra la lista de héroes para aquellos cuyo nombre de superhéroe incluye el texto de búsqueda.
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
}