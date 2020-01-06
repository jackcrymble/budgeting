import { NgModule } from '@angular/core';

import { AddTransactionComponent } from './add-transaction.component';
import { NumberPadModule } from '../number-pad/number-pad.module';
import { MatSlideToggleModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NumberPadModule,
        MatSlideToggleModule,
        MatInputModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AddTransactionComponent
    ],
    declarations: [
        AddTransactionComponent
    ],
    providers: [],
})
export class AddTransactionModule { }
