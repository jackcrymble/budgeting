import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionInterface } from 'src/app/models/transaction/transaction.model';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TransactionService {

    reference = 'transactions';

    constructor(
        private localStorageService: LocalStorageService
    ) {}

    getAllTransactions(): Observable<Array<TransactionInterface>> {
        return this.localStorageService.get(this.reference);
    }

    addTransaction(transaction: TransactionInterface): Observable<Array<TransactionInterface>> {
        return this.localStorageService.add(this.reference, transaction);
    }

    removeTransaction(transaction: TransactionInterface): Observable<Array<TransactionInterface>> {
        return this.localStorageService.remove(this.reference, transaction);
    }

}
