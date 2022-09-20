import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {ShortenPipe} from './shorten.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe
  ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
