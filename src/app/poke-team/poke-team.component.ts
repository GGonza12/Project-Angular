import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Poke } from '../poke-list/Poke';
import { PokeTeamService } from '../poke-team.service';

@Component({
  selector: 'app-poke-team',
  templateUrl: './poke-team.component.html',
  styleUrls: ['./poke-team.component.scss']
})
export class PokeTeamComponent implements OnInit {

  teamList: Poke[] = [];
  constructor(private team:PokeTeamService) {
    team.teamList.subscribe((observable)=>this.teamList = observable);
   }

  ngOnInit(): void {
  }

}
