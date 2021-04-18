import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exam',
  templateUrl: './exam.component.html',
  // styleUrls: ['./exam.component.css'],
  styles:[`
    .class1{
      color : white
    }
    .class2{
      background : lightBlue
    }
  `]
})
export class ExamComponent implements OnInit {
  course=[]
  courseStatus:Boolean=false
  courseList=['MCA','BCOM','BCA']
  switchClr=['yellow']
  countries=[{code : 'ind' , name : 'India'},{code : 'us' , name : 'US'},{code : 'ame' , name : 'America'},
  {code : 'uk' , name : 'UK'}]
  currentCountry: String

  constructor() { }

  onClickChange(){
    this.courseStatus=true
  }

  clrChange(){
    return this.courseStatus==true ? 'pink':'lightgreen'
  }

  choice(code){
    this.currentCountry=code
  }

  ngOnInit() {
  }

}
