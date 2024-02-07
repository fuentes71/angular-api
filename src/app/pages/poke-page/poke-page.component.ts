import { Component } from '@angular/core';
import { SearchPokemonComponent } from '../components/search-pokemon/search-pokemon.component';
import { ListCardComponent } from '../components/listCard/listCard.component';

@Component({
  selector: 'app-poke-page',
  standalone: true,
  imports: [SearchPokemonComponent, ListCardComponent],
  templateUrl: './poke-page.component.html',
  styleUrl: './poke-page.component.scss',
})
export class PokePageComponent {
  receivedChange: number = 0;

  changeGet(data: number) {
    this.receivedChange = data;
  }
}
