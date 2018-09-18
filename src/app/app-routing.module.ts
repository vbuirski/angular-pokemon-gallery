import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent }      from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: 'pokemons', component: PokemonsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}