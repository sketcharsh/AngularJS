import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  // styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  DisplayData = [{name: 'A',age: '18',country : 'INDIA'},{name: 'B',age: '32',country : 'CANADA'},{name: 'C',age: '40',country : 'UK'},{name: 'D',age: '24',country : 'INDIA'}]
  DisplayEmpl = [{code : 'A1' , name : 'ABC' , Gender : 'M' , Salary : '20000' , DOB : '20 - 12 - 1996'},
  {code : 'A2' , name : 'BCD' , Gender : 'M' , Salary : '35000' , DOB : '20 - 12 - 1996'},
  {code : 'A3' , name : 'DEF' , Gender : 'F' , Salary : '20000' , DOB : '25 - 01 - 1992'},
  {code : 'A4' , name : 'FGH' , Gender : 'M' , Salary : '45000' , DOB : '02 - 06 - 1991'},
  {code : 'A5' , name : 'HIJ' , Gender : 'F' , Salary : '65000' , DOB : '10 - 12 - 1993'}]
  constructor() { }

  ngOnInit() {
  }

}
