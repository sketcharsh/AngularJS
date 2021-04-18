import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  Popeye = ``

  Form = {
    firstName : "",
    lastName : "",
  }
  
  userObj = new User("","");

  @Output() childEvent = new EventEmitter<any>();
  @Input() childProperty:User

  ngOnInit() {
  }

  childClick()
  {
      this.userObj.fname=this.childProperty.fname
      this.userObj.lname=this.childProperty.lname
      // this.childEvent.emit("Message from child")
      this.childEvent.emit(this.userObj);
  }
}
