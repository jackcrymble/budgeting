import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountInterface } from 'src/app/models/account/account.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Injectable()
export class AccountsResolver implements Resolve<Array<AccountInterface>> {

    constructor(
        private accountsService: AccountsService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Array<AccountInterface>> {
        return this.accountsService.getAllAccounts();
    }
}
