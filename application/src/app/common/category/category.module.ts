import { NgModule } from '@angular/core';

import { CategoryComponent } from './category.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [],
    exports: [
        BrowserModule,
        CategoryComponent
    ],
    declarations: [
        CategoryComponent
    ],
    providers: [],
})
export class CategoryModule { }
