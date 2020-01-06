import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CategoryGroupInterface } from 'src/app/models/category-group/category-group.model';
import { testCategoryGroupData } from 'src/app/models/category-group/category-group.data';
import { ButtonOptionInterface } from 'src/app/models/button-option/button-option.model';
import { Subscription } from 'rxjs';
import { CategoryGroupService } from 'src/app/services/category-group.service';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetComponent implements OnInit, OnDestroy {

    categoryGroups: Array<CategoryGroupInterface> = [];
    headerOptions: Array<ButtonOptionInterface> = [
        {
            name: 'Edit',
            url: '',
            icon: 'edit'
        },
    ];

    showEditView: boolean;
    dataSubscription: Subscription;

    constructor(
        private categoryGroupService: CategoryGroupService,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.showEditView = false;
        this.refreshData();
    }

    ngOnDestroy() {
        if (this.dataSubscription) {
            this.dataSubscription.unsubscribe();
        }
    }

    handleHeaderButtonClick(option: ButtonOptionInterface) {
        this.showEditView = !this.showEditView;
        if (!this.showEditView) {
            this.refreshData();
        }
    }

    refreshData() {
        this.dataSubscription = this.categoryGroupService.getAllCategoryGroups().subscribe(resp => {
            this.categoryGroups = resp;
            this.cd.markForCheck();
        })
    }

}
