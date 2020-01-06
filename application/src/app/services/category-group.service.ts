import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { CategoryGroupInterface } from '../models/category-group/category-group.model';

@Injectable()
export class CategoryGroupService {

    reference = 'category-groups';

    constructor(
        private localStorageService: LocalStorageService
    ) { }

    getAllCategoryGroups(): Observable<Array<CategoryGroupInterface>> {
        return this.localStorageService.get(this.reference);
    }

    addCategoryGroup(categoryGroup: CategoryGroupInterface): Observable<Array<CategoryGroupInterface>> {
        return this.localStorageService.add(this.reference, categoryGroup);
    }

    removeCategoryGroup(categoryGroup: CategoryGroupInterface): Observable<Array<CategoryGroupInterface>> {
        return this.localStorageService.remove(this.reference, categoryGroup);
    }

}
