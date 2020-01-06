import { NgModule } from '@angular/core';

import { AddAccountDialogComponent } from './add-account-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AddAccountDialogComponent
    ],
    declarations: [
        AddAccountDialogComponent
    ],
    providers: [],
})
export class AddAccountDialogModule { }
