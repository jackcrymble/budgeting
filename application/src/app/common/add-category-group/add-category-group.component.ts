import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CategoryGroupInterface } from 'src/app/models/category-group/category-group.model';

@Component({
    selector: 'app-add-category-group',
    templateUrl: './add-category-group.component.html',
    styleUrls: ['./add-category-group.component.scss']
})
export class AddCategoryGroupComponent implements OnInit {

    name: FormControl;

    constructor(
        public dialogRef: MatDialogRef<AddCategoryGroupComponent>,
    ) { }

    ngOnInit() {
        this.name = new FormControl('');
    }

    close(newGroup?: CategoryGroupInterface) {
        this.dialogRef.close(newGroup);
    }

    create() {
        this.close({
            id: 1,
            name: this.name.value,
            categories: []
        } as CategoryGroupInterface);
    }

}
