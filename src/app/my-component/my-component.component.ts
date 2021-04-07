import { PokemonEntry } from './../Config';
import { PokeApiService } from './../poke-api.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  list: Pokemon[] = [];

  selectedPokemon!: Pokemon;
  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void { }

  onChange(value: any) {
    console.log(value);
    this.selectedPokemon = value;
  }

  afficherPokemon(): void {
    if (this.list.some((pokemon) => pokemon.name === this.id)) {
      console.log(this.id);
    } else if (this.list.some((pokemon) => pokemon.id === parseInt(this.id))) {
      console.log(this.id);
    } else {
      console.log("Ce pokemon n'existe pas");
    }
    //test pour voir ce qu'on a recup de l'api
    this.getPokemons();
  }

  getPokemons() {
    this.pokeApiService.getPokemons().subscribe((data) => {
      console.log(data)
      data.pokemon_entries.forEach((p) => {
        
        this.list.push(p.pokemon_species);
      });
    });
  }

  // getPokemonInfo() {
  //   this.pokeApiService
  //     .getPokemonInfo(54)
  //     .subscribe((pokemon: Pokemon) => {
  //       this.pokemon = pokemon;
  //       console.log(pokemon)
  //     });
  // }

}
