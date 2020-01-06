import { NgModule } from '@angular/core';

import { NavigationBarComponent } from './navigation-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule, MatButtonModule} from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        NavigationBarComponent
    ],
    declarations: [
        NavigationBarComponent
    ],
    providers: [],
})
export class NavigationBarModule { }
