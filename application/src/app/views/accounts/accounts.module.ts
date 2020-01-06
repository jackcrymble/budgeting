import { NgModule } from '@angular/core';

import { AccountsComponent } from './accounts.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule, MatButtonModule } from '@angular/material';
import { AddAccountDialogModule } from 'src/app/common/add-account-dialog/add-account-dialog.module';
import { AddAccountDialogComponent } from 'src/app/common/add-account-dialog/add-account-dialog.component';
import { AccountsResolver } from './resolvers/accounts.resolver';
import { AccountsService } from 'src/app/services/accounts.service';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
    imports: [
        BrowserModule,
        MatDividerModule,
        MatButtonModule,
        AddAccountDialogModule,
        HeaderModule
    ],
    entryComponents: [
        AddAccountDialogComponent
    ],
    exports: [
        AccountsComponent
    ],
    declarations: [
        AccountsComponent
    ],
    providers: [
        AccountsResolver,
        AccountsService
    ],
})
export class AccountsModule { }
