import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarModule } from './common/navigation-bar/navigation-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BudgetModule } from './views/budget/budget.module';
import { TransactionModule } from './views/transaction/transaction.module';
import { AccountsModule } from './views/accounts/accounts.module';
import { ReportsModule } from './views/reports/reports.module';
import { HelpModule } from './views/help/help.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './common/header/header.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    NavigationBarModule,
    BrowserAnimationsModule,
    BudgetModule,
    AccountsModule,
    TransactionModule,
    ReportsModule,
    HelpModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
