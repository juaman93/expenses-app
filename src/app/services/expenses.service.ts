import { Injectable } from '@angular/core'
import { Firestore, collection, addDoc } from '@angular/fire/firestore'
import Expense from '../interfaces/expense.interface'

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private firestore: Firestore) {}

  addExpense(expense: Expense) {
    const expenseRef = collection(this.firestore, 'expenses')
    return addDoc(expenseRef, expense)
  }
}
