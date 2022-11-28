import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Poke } from './poke-list/Poke';

const URL= 'https://61ba505548df2f0017e5aa60.mockapi.io/Pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Poke[]>{
   return this.http.get<Poke[]>(URL)
   .pipe(
    tap((pokemons: Poke[])=>pokemons.forEach(pokemon=> pokemon.quantity =0))
   );
  }

}
