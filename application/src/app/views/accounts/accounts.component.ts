import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AccountInterface } from 'src/app/models/account/account.model';
import { MatDialog } from '@angular/material';
import { AddAccountDialogComponent } from 'src/app/common/add-account-dialog/add-account-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent implements OnInit {

    @Input() accounts: Array<AccountInterface> = [];

    get allAccountTotal() {
        let total = 0;
        this.accounts.forEach(a => total += a.balance);
        return total;
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private accountsService: AccountsService,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.accounts = this.activatedRoute.snapshot.data['accounts'];
    }

    addAccount() {
        const dialogRef = this.dialog.open(AddAccountDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.accountsService.addAccount(result).subscribe(resp => {
                    this.accounts = resp;
                    this.cd.markForCheck();
                });
            }
        });
    }

}
