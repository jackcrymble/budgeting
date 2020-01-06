import { NgModule } from '@angular/core';

import { TransactionComponent } from './transaction.component';
import { AddTransactionModule } from 'src/app/common/add-transaction/add-transaction.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        AddTransactionModule
    ],
    exports: [
        TransactionComponent
    ],
    declarations: [
        TransactionComponent
    ],
    providers: [],
})
export class TransactionModule { }
