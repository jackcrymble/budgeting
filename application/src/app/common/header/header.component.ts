import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonOptionInterface } from 'src/app/models/button-option/button-option.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() title: string = '';
    @Input() options: Array<ButtonOptionInterface> = [];
    @Output() buttonClicked: EventEmitter<ButtonOptionInterface> = new EventEmitter<ButtonOptionInterface>();

    constructor() { }

    ngOnInit() {}

    onClick(option: any) {
        this.buttonClicked.emit(option);
    }

}
