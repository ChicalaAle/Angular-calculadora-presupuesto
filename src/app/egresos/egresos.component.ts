import { Component, Input, OnInit } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  @Input('expenses') expenses:Movement[];

  constructor(
    private _movement: MovementsService
  ) { }

  ngOnInit(): void {
  }

  eliminar(movimiento){
    this._movement.deleteMovement(movimiento);
  }

}
