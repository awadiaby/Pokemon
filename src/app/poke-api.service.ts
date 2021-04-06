import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './Config';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http
      .get<Config>('https://pokeapi.co/api/v2/pokedex/1');
  }

  getPokemonInfo(id: any): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
