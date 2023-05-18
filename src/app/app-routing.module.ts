import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ErrorComponent } from './error/error.component'
import { ExpensesDBComponent } from './expensesdb/expensesdb.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'expensesdb',
        component: ExpensesDBComponent
      },
      {
        path: '404',
        component: ErrorComponent
      },

      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
