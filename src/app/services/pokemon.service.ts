import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon } from '../model/pokemon';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  constructor(
    private http: HttpClient) { }

      /** GET pokemons from the server */
  getPokemons (): Observable<Pokemon[]> {

    const convertToPokemonArray = map((value: Object) => {
        var objList = value['results'];
        var pokemons = objList.map( (pokemon, index) => {
          return new Pokemon( pokemon.url, pokemon.name);
        });

        return pokemons.slice(0, 151);
      });

    return convertToPokemonArray(this.http.get<Object>(this.pokemonsUrl)
      .pipe(
        catchError(this.handleError('getPokemons', []))
      ));
  }

  /** GET hero by id. Return `undefined` when id not found */
  getPokemonsNo404<Data>(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/?id=${id}`;
    return this.http.get<Pokemon[]>(url)
      .pipe(
        map(pokemons => pokemons[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
  }

  /** GET pokemon by id. Will 404 if id not found */
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(operation + ': ' + error); // log to console
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}