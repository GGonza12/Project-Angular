import { Component, OnInit } from '@angular/core';
import { Poke } from '../poke-list/Poke';
import { PokeTeamService } from '../poke-team.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  teamList: Poke[] = [];
  constructor(private team:PokeTeamService) {
    team.teamList.subscribe((observable)=>this.teamList = observable);
   }
  ngOnInit(): void {
  }
  removeFromTeam(pokemon:Poke):void{
    this.team.removeFromTeam(pokemon);
  }

}
