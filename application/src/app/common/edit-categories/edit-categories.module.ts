import { NgModule } from '@angular/core';

import { EditCategoriesComponent } from './edit-categories.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { CategoryGroupModule } from '../category-group/category-group.module';
import { CategoryGroupService } from 'src/app/services/category-group.service';
import { AddCategoryGroupModule } from '../add-category-group/add-category-group.module';
import { AddCategoryGroupComponent } from '../add-category-group/add-category-group.component';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        NavigationBarModule,
        CategoryGroupModule,
        AddCategoryGroupModule
    ],
    exports: [
        EditCategoriesComponent
    ],
    declarations: [
        EditCategoriesComponent
    ],
    providers: [
        CategoryGroupService
    ],
    entryComponents: [
        AddCategoryGroupComponent
    ]
})
export class EditCategoriesModule { }
