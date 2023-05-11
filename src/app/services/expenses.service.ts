import { Injectable } from '@angular/core'
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc
} from '@angular/fire/firestore'
import { Observable } from 'rxjs'
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

  getExpenses(): Observable<Expense[]> {
    const expenseRef = collection(this.firestore, 'expenses')
    return collectionData(expenseRef, { idField: 'id' }) as Observable<
      Expense[]
    >
  }

  deleteExpense(expense: Expense) {
    const expenseDocRef = doc(this.firestore, `expenses/${expense.id}`)
    return deleteDoc(expenseDocRef)
  }
}
