import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  quantity!:number;
  @Input()
  max!:number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
  }
  upQuantity(): void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);

    }
    else {
      this.maxReached.emit("No puedes agregar mas de "+ this.max +" al equipo");
    }
    }
  downQuantity(): void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);

    }
  }
  ChangeQuantity(event: any):void{
    console.log(event.target);
    if(this.quantity>=0&&this.quantity<=this.max){
      this.quantityChange.emit(this.quantity);
    }
    else if(this.quantity>1){
      this.maxReached.emit("No puedes agregar mas de "+ this.max +" al equipo");
    }
   
 
  }

}
