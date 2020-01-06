import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountInterface } from 'src/app/models/account/account.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AccountsService {

    reference = 'accounts';

    constructor(
        private localStorageService: LocalStorageService
    ) {}

    getAllAccounts(): Observable<Array<AccountInterface>> {
        return this.localStorageService.get(this.reference);
    }

    addAccount(account: AccountInterface): Observable<Array<AccountInterface>> {
        return this.localStorageService.add(this.reference, account);
    }

    removeAccount(account: AccountInterface) {
        return this.localStorageService.remove(this.reference, account);
    }
}
