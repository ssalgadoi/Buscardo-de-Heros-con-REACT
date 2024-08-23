// Importamos el hook `useMemo` de React, que se usa para memorizar valores calculados y evitar cálculos innecesarios.
// `getHeroesByPublisher` es una función que obtenemos del archivo correspondiente en la carpeta `helpers`.
// Esta función se utiliza para obtener una lista de héroes filtrada por el editor (publisher) especificado.
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';  // Verifica esta ruta

// Importamos el componente `HeroCard` desde su archivo correspondiente.
// Este componente se encargará de mostrar la información de cada héroe individualmente en forma de tarjeta.
import { HeroCard } from './HeroCard';  // Ajusta la ruta según la ubicación de HeroCard

// Definimos y exportamos un componente funcional llamado `HeroList`.
// Este componente recibe una prop llamada `publisher` que indica el editor (DC Comics, Marvel Comics, etc.)
// del cual queremos mostrar los héroes.
export const HeroList = ({ publisher }) => {

    // Usamos el hook `useMemo` para memorizar el resultado de `getHeroesByPublisher`.
    // Esto significa que `getHeroesByPublisher` solo se ejecutará nuevamente si el valor de `publisher` cambia,
    // lo que puede mejorar el rendimiento al evitar cálculos innecesarios.
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    // El componente devuelve un JSX que contiene un contenedor (`div`) con clases de Bootstrap para estructurar las tarjetas.
    // Se itera sobre la lista de `heroes` y se renderiza una tarjeta (`HeroCard`) para cada héroe en la lista.
    // Usamos la prop `key` con el `id` del héroe para ayudar a React a identificar cada elemento de la lista de manera única.
    // El operador spread (`...hero`) se usa para pasar todas las propiedades del objeto `hero` como props al componente `HeroCard`.
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}  // Asignamos el `id` del héroe como la clave única para cada tarjeta
                        {...hero}  // Pasa todas las propiedades de `hero` como props a `HeroCard`
                    />
                ))
            }
        </div>
    );
}
