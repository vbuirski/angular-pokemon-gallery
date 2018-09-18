import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
