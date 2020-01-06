import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AccountInterface } from 'src/app/models/account/account.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-add-account-dialog',
    templateUrl: './add-account-dialog.component.html',
    styleUrls: ['./add-account-dialog.component.scss']
})
export class AddAccountDialogComponent implements OnInit {

    type: FormControl;
    name: FormControl;
    balance: FormControl;

    constructor(
        public dialogRef: MatDialogRef<AddAccountDialogComponent>,
    ) { }

    ngOnInit() {
        this.type = new FormControl('');
        this.name = new FormControl('');
        this.balance = new FormControl('');
    }

    onNoClick(account?: AccountInterface): void {
        this.dialogRef.close(account);
    }

    createAccount(): void {
        this.onNoClick({
            id: this.genId(),
            name: this.name.value,
            type: this.type.value,
            balance: parseInt(this.balance.value, 10)
        });
    }

    private genId() {
        let value = '';
        for (let i = 0; i < 10; i++) {
            value += Math.random() * 10;
        }
        return parseInt(value, 10);
    }

}
