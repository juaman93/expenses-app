import { Component, OnInit } from '@angular/core'
import Expense from 'src/app/interfaces/expense.interface'
import { ExpensesService } from 'src/app/services/expenses.service'

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[]
  displayedColumns: string[] = ['description', 'amount', 'category', 'date']

  constructor(private expensesService: ExpensesService) {
    this.expenses = []
  }

  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses
    })
  }

  async onClickDelete(expense: Expense) {
    const response = await this.expensesService.deleteExpense(expense)
    console.log(response)
  }
}
