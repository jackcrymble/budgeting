import { NgModule } from '@angular/core';

import { CategoryGroupComponent } from './category-group.component';
import { CategoryModule } from '../category/category.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        CategoryModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        CategoryGroupComponent
    ],
    declarations: [
        CategoryGroupComponent
    ],
    providers: [],
})
export class CategoryGroupModule { }
