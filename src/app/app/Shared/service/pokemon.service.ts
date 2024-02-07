import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  url:string = 'https://pokeapi.co/api/v2/pokemon/?offset=00&limit=20';

  private pokemon:Pokemon[] = []

  getAllPokemon(url: string | null){
    return this.http.get<any>(url ?? this.url).pipe(
      catchError((err)=>{
        console.log(err);
        return of(undefined)
        
      })
    )
  }

  getMoreInfo(url:string) {
    return this.http.get<any>(url).pipe(
      catchError((err)=>{
        console.log(err);
        return of(undefined)
        
      })
    )
  }

  setPokemon(pokemon:Pokemon[]){
    this.pokemon = pokemon
    
  }

  getPokemon(): Observable<Pokemon[]>{
    return of(this.pokemon)
  }
  
 
}
