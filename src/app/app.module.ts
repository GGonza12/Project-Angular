import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeTrainerPokemonsComponent } from './poke-trainer-pokemons/poke-trainer-pokemons.component';
import { PokeTrainerTrainerComponent } from './poke-trainer-trainer/poke-trainer-trainer.component';
import { TrainerComponent } from './trainer/trainer.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FormsModule } from '@angular/forms';
import { PokeTeamComponent } from './poke-team/poke-team.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeTrainerPokemonsComponent,
    PokeTrainerTrainerComponent,
    TrainerComponent,
    InputIntegerComponent,
    PokeTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
