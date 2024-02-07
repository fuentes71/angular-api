import { Pokemon } from './../../../app/Shared/interface/pokemon';
import { PokemonService } from '../../../app/Shared/service/pokemon.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.scss',
})
export class SearchPokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  @Output() dataSet = new EventEmitter<number>();

  num = 0;

  next?: string | null;
  previous?: string | null;
  poke: Pokemon[] = []

  ngOnInit(): void {
    this.handleSearchPage(null);
  }

  onChange() {
    this.num++;
    this.dataSet.emit(this.num);
  }

  handleSearchPage(url: string | null): void {
    this.pokemonService.getAllPokemon(url).subscribe((res: any) => {
      if (res?.results) {
        this.next = res.next;
        this.previous = res.previous;

        let pokemonsTemp: Pokemon[] = [];

         res.results.map((pokemon: { url: string; name: string }) => {
          pokemon.url && this.pokemonService
            .getMoreInfo(pokemon.url)
            .subscribe((pokeDetail: any) => {

              console.log("pokeDetail");

              pokemonsTemp.push({
                backgroundColor: '',
                name:pokemon.name,
                types: pokeDetail.types,
                sprites: pokeDetail.sprites,
                id: pokeDetail.id,
                url: pokemon.url,
              });
              
              console.log(pokemonsTemp);

              // let backgroundColor = types[0].type

            });
            // this.pokemonService.setPokemon(pokemonsTemp);

        });
        console.log(pokemonsTemp);

        // this.onChange();
      }
    });
  }
}
