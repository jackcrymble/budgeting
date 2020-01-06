import { NgModule } from '@angular/core';

import { NumberPadComponent } from './number-pad.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        NumberPadComponent
    ],
    declarations: [
        NumberPadComponent
    ],
    providers: [],
})
export class NumberPadModule { }
