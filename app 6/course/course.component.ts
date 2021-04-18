import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseData=[{code : 'mscit' , name : 'MSC(IT)'},
              {code : 'mca' , name : 'MCA'},
              {code : 'bca' , name : 'BCA'},
              {code : 'bcom' , name : 'BCom'},
              {code : 'pgdca' , name : 'PGDCA'}]
  currentCourse: String

  choise(code){
    this.currentCourse=code
  }

  constructor() { }

  ngOnInit() {
  }

}
