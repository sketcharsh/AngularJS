import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  // styleUrls: ['./course.component.css']
  styles:[`
  .class1{
    color : red;
  }
  .class2{
    background : black
  }
  `]
})
export class CourseComponent implements OnInit {
  arrayCourse = [1,2]
  courses = ['MSCIT' , 'BCA' , 'BCOM' ,'MCA' , 'DESIGN']
  colorName = ['Red']
  countries = [{code : 'ind' , country : 'India'} ,{code : 'Aus' , country : 'Australia'},{code : 'UK' , country : 'United Kingdom'} ]
  btnClick = false
  selectedC = String
  onclick(){
    this.btnClick = true;
  }
  choice(code)
  {
    this.selectedC = code
  }
  returnColor()
  {
    if(this.btnClick==true)
    {
      return "yellow";
    }
    else
    {
      return "pink"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
