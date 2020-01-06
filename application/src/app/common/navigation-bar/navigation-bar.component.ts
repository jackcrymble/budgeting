import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonOptionInterface } from 'src/app/models/button-option/button-option.model';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

    @Input() items: Array<ButtonOptionInterface> = [];
    @Output() buttonClicked: EventEmitter<ButtonOptionInterface> = new EventEmitter<ButtonOptionInterface>();

    constructor(
        private router: Router
    ) {}

    ngOnInit() {}

    click(item: ButtonOptionInterface) {
        if (item.url) {
            this.router.navigateByUrl(item.url);
        } else {
            this.buttonClicked.emit(item);
        }
    }
}
