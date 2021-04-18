import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  course=[{code : 'mscit' , name : 'MSC(IT)'},
          {code : 'mca' , name : 'MCA'},
          {code : 'pgdca' , name : 'PGDCA'},
          {code : 'bca' , name : 'BCA'},]
  student = {
    roll : "",
    name : "",
    phone : "",
    mail : "",
    course : "",
    gender : ""
  }

  showHidden=false

  detailsHidden=true

  showDetails(){
    this.detailsHidden=false
  }

  constructor() { }

  ngOnInit() {
  }

}
