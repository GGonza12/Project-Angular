import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Poke } from './poke-list/Poke';

const URL= 'https://61ba505548df2f0017e5aa60.mockapi.io/Pokemon';

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
 /* public getPokeId(id: number): Observable<Poke[]>{
    const url= `${URL}/${id}`
    console.log(url);
    console.log(this.http.get<Poke[]>(URL+id));
    return this.http.get<Poke[]>(URL+"/"+id).pipe(tap(
      _ => console.log(`fetched pokemon id= ${id}`))
    );

  } */

}
