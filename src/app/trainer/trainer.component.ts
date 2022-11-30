import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../poke-data.service';
import { Poke } from '../poke-list/Poke';
import { ActivatedRoute } from '@angular/router';
import { PokeTeamService } from '../poke-team.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  teamList: Poke[] = [];
  pokemonDetail: Poke[] = [];
  constructor(private team:PokeTeamService,
    private pokeDataService:PokeDataService,
    private route: ActivatedRoute,
    ) {
    team.teamList.subscribe((observable)=>this.teamList = observable);
   }
  ngOnInit(): void {


    //  this.showPokeFromTeam();

    
    
  }
removeFromTeam(pokemon:Poke):void{
    this.team.removeFromTeam(pokemon);
    this.pokemonDetail.pop();
  }
  showPokeFromTeam(idPokemon:number):void{
    // Tratando de preguntar a la api por un elemento con una id que le mando pero no funciona correctamente
    //let idPokemon = this.route.snapshot.paramMap.get('id') as unknown as number;
    //if(idPokemon!=null){
     //this.pokeDataService.getPokeId(idPokemon).subscribe(pokemon =>this.pokemon = pokemon);
     //console.log(this.pokeDataService.getPokeId(idPokemon).subscribe(pokemon =>this.pokemon=pokemon));
    //}
    for(let i=0;i<this.teamList.length;i++){
      if(this.teamList[i].id==idPokemon){
        this.pokemonDetail.pop();
        this.pokemonDetail.push(this.teamList[i]);
      }
    }
      
    
    console.log(this.pokemonDetail);
  }

}
