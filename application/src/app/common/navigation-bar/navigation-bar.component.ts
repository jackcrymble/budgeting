import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonOptionInterface } from 'src/app/models/button-option/button-option.model';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

    @Input() items: Array<ButtonOptionInterface> = [];

    constructor(
        private router: Router
    ) {}

    ngOnInit() {}

    navigate(url: string) {
        this.router.navigateByUrl(url);
    }
}
