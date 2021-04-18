import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  showName = "";
  Form1 = {
    firstName : "",
    lastName : "",
  }
  userObje = ""
  
  userObj = new User("","");
  
  constructor() { }

  ngOnInit() {
  }

  parentMethod(value:any)
  {
      this.userObj=value;
  }
}
