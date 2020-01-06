import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-transaction',
    templateUrl: './add-transaction.component.html',
    styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

    amount: string;
    showNumberPad: boolean = true;
    negative: boolean = true;

    // PAYEE Options

    constructor() { }

    ngOnInit() {
        this.resetAmount();
    }

    updateAmount(event: number) {
        if (this.amount[0] === '0') {
            this.amount = this.amount.slice(0, 0);
        }
        this.amount += event;
    }

    resetAmount() {
        this.amount = '0';
    }

    toggleNumberPad() {
        this.showNumberPad = !this.showNumberPad;
    }

    toggleChange() {
        this.negative = !this.negative;
    }

}
