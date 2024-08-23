// getHeroesByPublisher.js

import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} no es un nombre válido`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
};