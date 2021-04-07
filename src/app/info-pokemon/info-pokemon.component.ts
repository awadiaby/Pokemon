import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon
  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
  }

}
