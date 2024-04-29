import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {

    const validatePublisher = ['DC Comics', 'Marvel Comics'];

    if (!validatePublisher.includes(publisher))
        throw new Error(` El ${publisher} es invalido`);


    return heroes.filter(heroe => heroe.publisher === publisher);

}
