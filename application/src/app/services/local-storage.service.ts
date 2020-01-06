import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

    private _get(reference: string): Array<any> {
        return JSON.parse(localStorage.getItem(reference)) || [];
    }

    get(reference: string): Observable<Array<any>> {
        return of(this._get(reference));
    }

    add(reference: string, toAdd: any): Observable<any> {
        const existing = this._get(reference);
        existing.push(toAdd);
        localStorage.setItem(reference, JSON.stringify(existing));
        return of(existing);
    }

    remove(reference: string, toRemove: any): Observable<Array<any>> {
        let existing = this._get(reference);
        const idx = existing.map(d => d.id).indexOf(toRemove.id);
        if (idx > -1) {
            existing = existing.slice(idx, 0);
        }
        localStorage.setItem(reference, JSON.stringify(existing));
        return of(existing);
    }

    update(reference: string, toUpdate: any): Observable<Array<any>> {
        const existing = this._get(reference);
        const idx = existing.map(d => d.id).indexOf(toUpdate.id);
        if (idx > -1) {
            existing[idx] = toUpdate;
        }
        localStorage.setItem(reference, JSON.stringify(existing));
        return of(existing);
    }
}
