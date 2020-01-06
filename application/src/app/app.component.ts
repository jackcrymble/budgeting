import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ynab-free';

    items = [
        {
            name: 'Budget',
            icon: 'attach_money',
            url: '/budget'
        },
        {
            name: 'Accounts',
            icon: 'account_balance',
            url: '/accounts'
        },
        {
            name: 'Transaction',
            icon: 'add_circle_outline',
            url: '/add-transaction'
        },
        {
            name: 'Reports',
            icon: 'bar_chart',
            url: '/reports'
        },
        {
            name: 'Help',
            icon: 'help',
            url: '/help'
        }
    ];
}
