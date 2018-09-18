import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
      { id: 21, name: 'Magneta' },
      { id: 22, name: 'RubberMan' },
      { id: 23, name: 'Dynama' },
      { id: 24, name: 'Dr IQ' },
      { id: 25, name: 'Magma' },
      { id: 26, name: 'Tornado' }
    ];
    return {pokemons};
  }
}