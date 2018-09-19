import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  p: number;
  allPokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  pokemons: Pokemon[];

  currentSearch: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.p = 1;
    this.currentSearch = "";
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => {
        this.allPokemons = pokemons;
        this.updateFilteredPokemons();
      });
  }

  updateFilteredPokemons(): void {
    this.filteredPokemons =
      this.allPokemons
        .filter((pokemon) => pokemon.name.match(new RegExp(this.currentSearch, 'i')));

    this.updateDisplayedPokemons();
  }

  updateDisplayedPokemons(): void {

    this.pokemons = this.filteredPokemons;
  }

  search(keyword: string) {
    this.currentSearch = keyword;
    this.updateFilteredPokemons();
  }

}