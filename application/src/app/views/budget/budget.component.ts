import { Component, OnInit, Input } from '@angular/core';
import { CategoryGroupInterface } from 'src/app/models/category-group/category-group.model';
import { testCategoryGroupData } from 'src/app/models/category-group/category-group.data';
import { ButtonOptionInterface } from 'src/app/models/button-option/button-option.model';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

    @Input() categoryGroups: Array<CategoryGroupInterface> = [];
    headerOptions: Array<ButtonOptionInterface> = [
        {
            name: 'Edit',
            url: '',
            icon: 'edit'
        },
    ];

    showEditView: boolean;

    constructor() { }

    ngOnInit() {
        this.categoryGroups = testCategoryGroupData;
        this.showEditView = false;
    }

    handleHeaderButtonClick(option: ButtonOptionInterface) {
        this.showEditView = !this.showEditView;
    }

}
