import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { numberPadContent } from '../../models/number-pad/number-pad.data';

@Component({
    selector: 'app-number-pad',
    templateUrl: './number-pad.component.html',
    styleUrls: ['./number-pad.component.scss']
})
export class NumberPadComponent implements OnInit {

    @Output() numberChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() clear: EventEmitter<null> = new EventEmitter<null>();
    @Output() confirm: EventEmitter<null> = new EventEmitter<null>();

    content: Array<Array<number|string>>;

    constructor() { }

    ngOnInit() {
        this.content = numberPadContent;
    }

    buttonClicked(x: number|string): void {
        if (this.isNumber(x)) {
            this.numberChange.emit(x as number);
        } else {
            if (x === 'cancel') {
                this.clear.emit();
            } else {
                this.confirm.emit();
            }
        }
    }

    isNumber(x: any): boolean {
        return typeof x === 'number';
    }

}
