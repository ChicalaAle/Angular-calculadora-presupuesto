import { Component, Input, OnInit } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  @Input('incomes') incomes:Movement[];

  constructor(
    private _movement: MovementsService
  ) { }

  ngOnInit(): void {
  }

  eliminar(movimiento){
    this._movement.deleteMovement(movimiento);
  }

}
