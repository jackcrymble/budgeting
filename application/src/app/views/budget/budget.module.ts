import { NgModule } from '@angular/core';

import { BudgetComponent } from './budget.component';
import { CategoryGroupModule } from 'src/app/common/category-group/category-group.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from 'src/app/common/header/header.module';
import { EditCategoriesModule } from 'src/app/common/edit-categories/edit-categories.module';

@NgModule({
    imports: [
        BrowserModule,
        CategoryGroupModule,
        HeaderModule,
        EditCategoriesModule
    ],
    exports: [
        BudgetComponent
    ],
    declarations: [
        BudgetComponent
    ],
    providers: [],
})
export class BudgetModule { }
