import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ExpensesService } from 'src/app/services/expenses.service'

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {
  form: FormGroup

  constructor(private expensesService: ExpensesService) {
    this.form = new FormGroup({
      description: new FormControl(),
      amount: new FormControl(),
      category: new FormControl(),
      date: new FormControl()
    })
  }

  ngOnInit() {}

  async onSubmit() {
    console.log(this.form.value)
    const response = await this.expensesService.addExpense(this.form.value)
    console.log(response)
  }
}
