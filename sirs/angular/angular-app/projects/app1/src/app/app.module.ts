import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Sample } from './sample.component';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { SampleComponent } from './sample/sample.component';
import { SampleChildComponent } from './sample-child/sample-child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [
    AppComponent,Sample, XyzComponent, SampleComponent, SampleChildComponent, Parent1Component, Child1Component, CompAComponent, CompBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
