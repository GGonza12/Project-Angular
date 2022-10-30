import { Component, OnInit } from '@angular/core';
import { Poke } from './Poke';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemons: Poke[] = [{
    name: "Gengar",
    type:"Fantasma - Veneno",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/2048px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png",
    description:"Gengar es un Pokémon con extremidades pequeñas. Tiene una personalidad siniestra y tenebrosa, sobre todo en estado salvaje. Se dice que por las noches sale a espantar y perder a los viajeros para robar su alma. Viven en cementerios y lugares abandonados para que nadie los moleste. A menudo van acompañados de sus preevoluciones.",
    image:"https://images.wikidexcdn.net/mwuploads/wikidex/f/f8/latest/20200428203046/Gengar.png",
    ps:60,
    move:"Garra sombra",
    available:true

  },
  {
    name: "Machamp",
    type:"Lucha",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/2048px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png",
    description:"Machamp es uno de los Pokémon de tipo lucha más fuertes, dominando cualquier tipo de arte marcial; es capaz de dar 1000 golpes en tan solo dos segundos, y si toma al rival por los pies con sus cuatro brazos, lo lanzará lo más lejos posible, ganando fácilmente el combate.",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    ps:100,
    move:"Puño incremento",
    available:true
  },
  {
    name: "Torchic",
    type:"Fuego",
    logo:"https://toppng.com/uploads/preview/69kib-375x360-fire-pokemon-fire-energy-11562907671ukkqpconnm.png",
    description:"Este Pokémon está basado en un pequeño pollito. Torchic está cubierto por una suave capa de plumas con tonos anaranjados, sus alas son inútiles para volar debido a su pequeño tamaño. Antes que sus patas se desarrollen completamente, este Pokémon se mantiene cerca de su entrenador, siguiéndole a todos lados mientras aprende a caminar.",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png",
    ps:30,
    move:"Ascuas",
    available:true
  },
  {
    name: "Hitmonchan",
    type:"Lucha",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/2048px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png",
    description:"A diferencia de Hitmonlee, Hitmonchan es un maestro de los puños con los cuales consigue noquear a cualquier oponente. Su destreza con los golpes ha logrado que pueda aprender puñetazos de todas clases, incluyendo los elementales, entre otros.",
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    ps:65,
    move:"Puño incremento",
    available:true
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  changeDisponibility(pokemon:any){
    pokemon.available=!pokemon.available;
    this.alert(pokemon);
  }
  alert(pokemon:any){
    if(pokemon.available==!true){
      window.alert("Agregado.");
    }
    else {
      window.alert("Eliminado.");
    }
  }
}
