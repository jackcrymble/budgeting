import { Component, OnInit, Input } from '@angular/core';
import { testCategoryGroupData } from 'src/app/models/category-group/category-group.data';
import { CategoryGroupInterface } from 'src/app/models/category-group/category-group.model';

@Component({
    selector: 'app-category-group',
    templateUrl: './category-group.component.html',
    styleUrls: ['./category-group.component.scss']
})
export class CategoryGroupComponent implements OnInit {

    @Input() categoryGroup: CategoryGroupInterface;
    @Input() editMode = false;

    constructor() { }

    ngOnInit() {}

}
