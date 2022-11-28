import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Poke } from './poke-list/Poke';

@Injectable({
  providedIn: 'root'
})
export class PokeTeamService {

  private _teamList: Poke[]=[];
  teamList:BehaviorSubject<Poke[]>= new BehaviorSubject (this._teamList);
  constructor() { } 

  getQuantity():number{
    let cant=6;
    for(let i=0;i<this._teamList.length;i++){
      cant-= this._teamList[i].quantity;
    }
  return cant;
  }
  addToTeam(pokemon:Poke): void{
    
    let item:Poke = this._teamList.find((v1)=>v1.name==pokemon.name) as Poke;
    let cantidad=this.getQuantity()-pokemon.quantity;


    if((!item)&&(pokemon.quantity>0)&&(cantidad>=0)){        
        this._teamList.push({... pokemon});
      }
      else if(item&&cantidad>=0){
        this._teamList.push({... pokemon});
      }
      else if(cantidad<0){
        alert("No puedes agregar mas de 6 al equipo");
      } 
    
      console.table(this._teamList);
      this.teamList.next(this._teamList);
    }
    
    
  }

