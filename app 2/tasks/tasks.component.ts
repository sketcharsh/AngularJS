import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  data=[{name : 'Geeta' , age : '20'},{name : 'Reeta' , age : '30'},{name : 'Meet' , age : '37'},
  {name : 'Heet' , age : '21'},{name : 'Jeet' , age : '23'}]

  dataCountry=[{name : 'Geeta' , country : 'India'},{name : 'Meet' , country : 'US'},
  {name : 'Reeta' , country : 'America'},{name : 'Heet' , country : 'India'},{name : 'Weeta' , country : 'US'},
  {name : 'Jeet' , country : 'UK'}]

  dataTable=[{code : '1' , name : 'Geeta' , age : '30' , country : 'US'},
            {code : '2' , name : 'Meeta' , age : '20' , country : 'India'},
            {code : '3' , name : 'Heet' , age : '33' , country : 'UK'},
            {code : '4' , name : 'Meet' , age : '43' , country : 'India'},
            {code : '5' , name : 'Reeta' , age : '54' , country : 'America'}]

  constructor() { }

  ngOnInit() {
  }

}
