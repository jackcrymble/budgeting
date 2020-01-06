import { Component, OnInit, Input } from '@angular/core';
import { CategoryInterface } from 'src/app/models/category/category.model';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    @Input() category: CategoryInterface;
    @Input() editMode = false;

    constructor() { }

    ngOnInit() { }

}
