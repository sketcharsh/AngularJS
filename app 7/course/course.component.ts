import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  dataStud=[{Roll : '1' , Name : 'Geeta' , Phone : '11111' , Mail : 'g@g.com'},
            {Roll : '2' , Name : 'Heet' , Phone : '22222' , Mail : 'h@g.com'},
            {Roll : '3' , Name : 'Meet' , Phone : '33333' , Mail : 'm@g.com'},
            {Roll : '4' , Name : 'Reeta' , Phone : '44444' , Mail : 'r@g.com'},
            {Roll : '5' , Name : 'Jeet' , Phone : '55555' , Mail : 'j@g.com'},
            {Roll : '6' , Name : 'Neeta' , Phone : '66666' , Mail : 'n@g.com'}]
  odd=false

  oddClick(){
    if(this.odd==false){
      this.odd=true
    }
    else{
      this.odd=false
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
