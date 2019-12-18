import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Sample } from './sample.component';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,Sample, XyzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
