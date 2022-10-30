import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeTrainerPokemonsComponent } from './poke-trainer-pokemons/poke-trainer-pokemons.component';
import { PokeTrainerTrainerComponent } from './poke-trainer-trainer/poke-trainer-trainer.component';

const routes: Routes = [
  {
    path:'', component: PokeTrainerPokemonsComponent
  },
  {
    path:'home',component: PokeTrainerPokemonsComponent
  },
  {
    path:'trainer',component: PokeTrainerTrainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
