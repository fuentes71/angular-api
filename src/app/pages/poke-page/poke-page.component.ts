import { Component, OnInit, } from '@angular/core';
import { PokemonService } from '../../core/service/pokemon.service';
import { Pokemon } from '../../core/interface/pokemon';
import { ListCardComponent } from './components/listCard/listCard.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-poke-page',
  standalone: true,
  imports: [NgIf, ListCardComponent],
  templateUrl: './poke-page.component.html',
  styleUrl: './poke-page.component.scss',
})
export class PokePageComponent implements OnInit{
  next?: string;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
   
  }

  ngOnInit(): void {
    console.log("test");
    
    
    this.handleSearchPage
    (this.pokemonService.url);
  }
  
  handleSearchPage(url: string | null): void {
    this.pokemonService.getAllPokemon(url).subscribe((res: any) => {
      if (res?.results) {
        this.next = res.next;

        res.results.map((pokemon: { url: string; name: string }) => {
          pokemon.url &&
            this.pokemonService
              .getMoreInfo(pokemon.url)
              .subscribe((pokeDetail: any) => {
                const { id, types, sprites } = pokeDetail;
                let backgroundColor = types[0].type.name;
                if (backgroundColor === 'normal' && types.length > 1) {
                  backgroundColor = types[1].type.name;
                }

                
                this.pokemons.push({
                  backgroundColor: backgroundColor,
                  name: pokemon.name,
                  types: types,
                  sprites: sprites.other['official-artwork'].front_default,
                  id: id,
                  url: pokemon.url,
                });
              });
            });
            console.log(this.pokemons);
      }
    });
  }
}
