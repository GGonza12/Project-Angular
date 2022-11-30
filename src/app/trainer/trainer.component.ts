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
  pokeId: Poke[] = [];
  constructor(private team:PokeTeamService,
    private pokeDataService:PokeDataService,
    private route: ActivatedRoute,
    ) {
    team.teamList.subscribe((observable)=>this.teamList = observable);
   }
  ngOnInit(): void {


      this.showPokeFromTeam();

    
    
  }
removeFromTeam(pokemon:Poke):void{
    this.team.removeFromTeam(pokemon);
  }
  showPokeFromTeam():void{
    let idPokemon = this.route.snapshot.paramMap.get('id') as unknown as number;
    if(idPokemon!=null){
      this.pokeDataService.getPokeId(idPokemon).subscribe(pokemon =>this.pokeId = pokemon);

    }
      
    
    console.log(this.pokeId);
  }

}
