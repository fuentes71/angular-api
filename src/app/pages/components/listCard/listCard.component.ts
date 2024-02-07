import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PokemonService } from '../../../app/Shared/service/pokemon.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Pokemon } from '../../../app/Shared/interface/pokemon';
import { Observable, Subscription } from 'rxjs';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'list-card',
  standalone: true,
  imports: [CommonModule,NgFor, NgIf, CardComponent],
  templateUrl: './listCard.component.html',
  styleUrl: './listCard.component.scss',
})
export class ListCardComponent implements  OnDestroy, OnChanges {
  
  @Input() receivedChange: number = 0;

  pokemons: Pokemon[] = [];
  pokemonsSubscription!: Subscription;
 
  constructor(private pokemonService: PokemonService) {}


  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['receivedChange']) {
      
      this.refreshPokemons()
    }
  }
    ngOnDestroy(): void {
    this.pokemonsSubscription && this.pokemonsSubscription.unsubscribe();
  }

  private refreshPokemons() {
    
    this.pokemonsSubscription = this.pokemonService
    .getPokemon()
    .subscribe((res) => {
      if (res.length) {
        this.pokemons = res;
        console.log(res);
        
      }
    });
  }
}
