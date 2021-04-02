import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  list: Pokemon[] = [
    new Pokemon(1, "Florizare"),
    new Pokemon(2, "Reptincel"),
    new Pokemon(3, "Dracaufeu"),
    new Pokemon(4, "Carapuce"),
  ];

  selectedPokemon ="Florizare";
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value:any) {
    console.log(value);
    this.selectedPokemon = value;
  }
}
