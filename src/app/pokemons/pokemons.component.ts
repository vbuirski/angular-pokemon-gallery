import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { PagerService } from '../services/index';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private pagerService: PagerService) { }

  private allPokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  pokemons: Pokemon[];

  searchText: string;

   // pager object
   pager: any = {};
 
   // paged items
   pagedItems: any[];

  ngOnInit() {
    this.searchText = "";
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => {
        this.allPokemons = pokemons;
        this.updateFilteredPokemons();
        this.setPage(1);
      });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.filteredPokemons.length, page);

    // get current page of items
    this.pokemons = this.filteredPokemons.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

  updateFilteredPokemons(): void {
    this.filteredPokemons =
      this.allPokemons
        .filter((pokemon) => pokemon.name.match(new RegExp(this.searchText, 'i')));

    this.updateDisplayedPokemons();
    this.setPage(1);
  }

  updateDisplayedPokemons(): void {

    this.pokemons = this.filteredPokemons;
  }

  search(keyword: string) {
    this.searchText = keyword;
    this.updateFilteredPokemons();
    this.setPage(1);
  }

}