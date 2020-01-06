import { NgModule } from '@angular/core';

import { AddCategoryGroupComponent } from './add-category-group.component';
import { MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        AddCategoryGroupComponent
    ],
    declarations: [
        AddCategoryGroupComponent
    ],
    providers: [],
})
export class AddCategoryGroupModule { }
