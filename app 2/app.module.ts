import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { TasksComponent } from './tasks/tasks.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    TasksComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
