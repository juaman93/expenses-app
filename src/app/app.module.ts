import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CurrencyPipe } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppNavigationComponent } from './app-navigation/app-navigation.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { ErrorComponent } from './error/error.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MonthlyexpenseschartComponent } from './charts/monthlyexpenseschart/monthlyexpenseschart.component'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { environment } from '../environments/environment'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { NewExpenseComponent } from './components/new-expense/new-expense.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ExpenseListComponent } from './components/expense-list/expense-list.component'
import { NgChartsModule } from 'ng2-charts'
import { ExpensesDBComponent } from './expensesdb/expensesdb.component'

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    DashboardComponent,
    ErrorComponent,
    ExpensesDBComponent,
    ExpenseListComponent,
    MonthlyexpenseschartComponent,
    NewExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgChartsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
