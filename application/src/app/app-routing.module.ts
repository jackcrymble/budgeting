import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './views/budget/budget.component';
import { HelpComponent } from './views/help/help.component';
import { ReportsComponent } from './views/reports/reports.component';
import { TransactionComponent } from './views/transaction/transaction.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { AccountsResolver } from './views/accounts/resolvers/accounts.resolver';

const routes: Routes = [
    {path: 'budget', component: BudgetComponent},
    {
        path: 'accounts',
        component: AccountsComponent,
        resolve: {
            accounts: AccountsResolver
        }
    },
    {path: 'add-transaction', component: TransactionComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'help', component: HelpComponent},
    {path: '**', redirectTo: 'budget'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
