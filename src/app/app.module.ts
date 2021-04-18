import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Chlid1Component } from './chlid1/chlid1.component';
import { Child2Component } from './child2/child2.component';
import { HighlightDirective } from './highlight.directive';
import { ProductDirective } from './product.directive';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Chlid1Component,
    Child2Component,
    HighlightDirective,
    ProductDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
