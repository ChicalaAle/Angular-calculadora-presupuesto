import { Component, ElementRef, ViewChild } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @ViewChild('description') description: ElementRef;
  @ViewChild('value') value: ElementRef;
  @ViewChild('type') type: ElementRef;
  type_select: string = 'ing';


  constructor(
    private _movement: MovementsService
  ){
  }

  newMovement(form){
    const movement = new Movement(this.description.nativeElement.value, this.value.nativeElement.value, this.type.nativeElement.value);
    this._movement.addMovement(movement);
    // form.reset();
  }

  changeType(value){
    this.type_select = value; 
  }

}
