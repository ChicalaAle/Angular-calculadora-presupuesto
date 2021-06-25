import { DoCheck, Injectable } from '@angular/core';
import { Movement } from './movement.model';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  movements:Movement[];

  constructor() {
    this.movements = [];
  }

  addMovement(movement: Movement){
    this.movements.push(movement);
  }

  getMovements(): Movement[]{
    return this.movements;
  }

  deleteMovement(movement){
    let index = this.movements.indexOf(movement);
    this.movements.splice(index, 1);
  }

}
