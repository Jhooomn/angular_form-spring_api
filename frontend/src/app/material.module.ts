import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
    imports: [MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, BrowserAnimationsModule],
    exports: [MatButtonModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, BrowserAnimationsModule],
})
export class MaterialModule { }
