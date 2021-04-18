import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo1',
  templateUrl: './demo1.component.html',
  // styleUrls: ['./demo1.component.css']
  styles:[`
      .class1{
        color:white
      }
      .class2{
        background:black
      }
  `]
})
export class Demo1Component implements OnInit {

  listSem=['MCA','BCA','PGDCA','MSCIT'];
  details=[{name : 'A' , age : '19'},{name : 'B' , age : '20'},{name : 'C' , age : '21'},
           {name : 'D' , age : '22'},{name : 'E' , age : '23'}];
  btnStatus=false;
  bindingTitle = "Hello";
  course=[]
  courseStatus=false
  country=[{code : 'ind' , name : 'India'},{code : 'us' , name : 'US'},{code : 'uk' , name : 'UK'},
           {code : 'aus' , name : 'Australia'},{code : 'jp' , name : 'Japan'}];
  currentCountry:String;  

  constructor() { }

  onCountryClick(code){
    this.currentCountry=code
  }

  onClickChange(){
    this.courseStatus=true
  }

  onClick(){
    this.bindingTitle = "Bye";
  }

  ngOnInit() {
  }

}
