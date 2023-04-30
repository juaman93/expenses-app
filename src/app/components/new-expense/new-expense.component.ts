import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ExpensesService } from 'src/app/services/expenses.service'

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {
  form: FormGroup

  constructor(private expensesService: ExpensesService) {
    const id = Math.floor(Math.random() * 1000) + 1 // Generate a random number between 1 and 1000 as the id
    this.form = new FormGroup({
      id: new FormControl(id),
      description: new FormControl(),
      amount: new FormControl(),
      category: new FormControl(),
      date: new FormControl(new Date().toISOString().substring(0, 10)) // Set the date to today's date
    })
  }

  formatInput(event: any) {
    let value = event.target.value
    // Remove any non-digit characters
    value = value.replace(/[^0-9\.]+/g, '')
    // Parse the string value to a number
    let numValue = parseFloat(value)
    if (isNaN(numValue)) {
      // If the parsed value is NaN, set it to 0
      numValue = 0
    }
    // Format the number as currency
    const formattedValue = numValue.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    })
    event.target.value = formattedValue
  }

  ngOnInit() {}

  async onSubmit() {
    console.log(this.form.value)
    const response = await this.expensesService.addExpense(this.form.value)
    console.log(response)
  }
}
