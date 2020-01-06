import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent
    ],
    providers: [],
})
export class HeaderModule { }
