import { Component, NgModule } from '@angular/core'
import { ExpensesService } from 'src/app/services/expenses.service'
import { DataSource } from '@angular/cdk/collections'

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  displayedColumns: string[] = ['description', 'amount', 'category', 'date']
  dataSource = new ExpenseDataSource(this.expense)

  constructor(private expense: ExpensesService) {}
}

export class ExpenseDataSource extends DataSource<any> {
  constructor(private expense: ExpensesService) {
    super()
  }

  connect() {
    return this.expense.getExpenses()
  }

  disconnect() {}
}
