import DatosDelPokemon from './DatosDelPokemon';

type ResultadosDelPokemon = {
        count: number,
        next: string,
        previous: null | string;
        results: DatosDelPokemon[];
};

export default ResultadosDelPokemon; 