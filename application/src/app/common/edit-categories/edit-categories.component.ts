import { Component, OnInit, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ButtonOptionInterface } from 'src/app/models/button-option/button-option.model';
import { CategoryGroupService } from 'src/app/services/category-group.service';
import { CategoryGroupInterface } from 'src/app/models/category-group/category-group.model';
import { Subscription } from 'rxjs';
import { testCategoryGroupData } from 'src/app/models/category-group/category-group.data';
import { MatDialog } from '@angular/material';
import { AddCategoryGroupComponent } from '../add-category-group/add-category-group.component';

@Component({
    selector: 'app-edit-categories',
    templateUrl: './edit-categories.component.html',
    styleUrls: ['./edit-categories.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCategoriesComponent implements OnInit, OnDestroy {

    @Output() closeView: EventEmitter<string> = new EventEmitter<string>();

    headerOptions: Array<ButtonOptionInterface> = [
        {
            name: 'Close',
            icon: 'close'
        }
    ];

    footerOptions: Array<ButtonOptionInterface> = [
        {
            name: 'Delete',
            icon: 'delete'
        },
        {
            name: 'New Group',
            icon: 'add_circle_outline'
        },
    ];

    categoryGroups: Array<CategoryGroupInterface> = [];
    categoryGroupSubscription: Subscription;

    constructor(
        private categoryGroupService: CategoryGroupService,
        private cd: ChangeDetectorRef,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.updateCategoryGroups();
    }

    ngOnDestroy() {
        this.categoryGroupSubscription.unsubscribe();
    }

    onHeaderButtonClick(item: ButtonOptionInterface) {
        this.closeView.emit();
    }

    onFooterButtonClick(item: ButtonOptionInterface) {
        if (item.name === 'New Group') {
            const dialogRef = this.dialog.open(AddCategoryGroupComponent);

            dialogRef.afterClosed().subscribe(resp => {
                if (resp) {
                    this.categoryGroupService.addCategoryGroup(resp).subscribe(() => {
                        this.updateCategoryGroups();
                    });
                }
            });
        }
    }

    updateCategoryGroups() {
        this.categoryGroupSubscription = this.categoryGroupService.getAllCategoryGroups().subscribe(resp => {
            this.categoryGroups = resp;
            this.cd.markForCheck();
        });
    }

}
