import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TasksComponent } from './tasks/tasks.component';
import { ChildComponent } from './child/child.component';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TasksComponent,
    ChildComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
