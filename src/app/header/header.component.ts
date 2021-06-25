import { Component, DoCheck, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  public badge: number = 0;
  public incomes: number = 0;
  public expenses: number = 0;

  constructor(
    private _movement: MovementsService
  ){
  }

  ngOnInit(): void {
    let movements = this._movement.getMovements();
    for(let movement of movements){
      this.incomes += +movement.total;
    }
  }

  ngDoCheck(){
    let totalIng = 0;
    let totalEgr = 0;
    let movements = this._movement.getMovements();
    for(let movement of movements){
      if(movement.type == 'ing'){
        totalIng += +movement.total;
      } else {
        totalEgr += +movement.total;
      }
    }
    this.incomes = totalIng;
    this.expenses = totalEgr;

    this.badge = this.incomes - this.expenses;
  }

}
