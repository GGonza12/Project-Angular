import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeTrainerPokemonsComponent } from './poke-trainer-pokemons/poke-trainer-pokemons.component';
import { PokeTrainerTrainerComponent } from './poke-trainer-trainer/poke-trainer-trainer.component';
import { TrainerComponent } from './trainer/trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeTrainerPokemonsComponent,
    PokeTrainerTrainerComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
