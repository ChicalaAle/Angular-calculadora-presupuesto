import { Component, DoCheck, OnInit } from '@angular/core';
import { Movement } from '../movement.model';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit, DoCheck {
 
  public movements:Movement[] = [];
  public expenses:Movement[] = [];
  public incomes:Movement[] = [];

  constructor(
    private _movements: MovementsService
  ) { }

  ngOnInit(): void {
    this.movements = this._movements.movements;
    
  }

  ngDoCheck(){
    this.expenses = this.getExpenses();
    this.incomes = this.getIncomes();
  }

  getExpenses():Movement[] {
    
    const expenses:Movement[] = [];

    for(let mov of this.movements){
      (mov.type=='egr') && expenses.push(mov);
    }

    return expenses;
  }

  getIncomes():Movement[] {
    
    const incomes:Movement[] = [];

    for(let mov of this.movements){
      (mov.type=='ing') && incomes.push(mov);
    }

    return incomes;
  }

}
